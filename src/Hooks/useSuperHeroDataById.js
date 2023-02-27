import axios from "axios";
import { useQuery,useQueryClient } from "react-query";

const fetchSuperHero=(heroId)=>{
    return axios.get(`http://localhost:4000/superheroes/${heroId}`);
}
export const useSuperHeroDataById=(heroId)=>{
    const queryclient=useQueryClient()//it i used for intail data  fecthing vd-18
return useQuery(["super-hero",heroId],()=>fetchSuperHero(heroId),{
    initialData:()=>{
        const hero=queryclient.getQueryData("super-hero")?.data?.find(hero=>hero.id===parseInt(heroId))

        if(hero)
        {
            return{
                data:hero
            }
        }
        else{
            return undefined;
        }
    }
})
}