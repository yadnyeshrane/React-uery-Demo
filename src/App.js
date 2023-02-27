import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Homepage from './components/Home.page';
import SuperherosPage from './components/Superheros.page';
import RQSuperHeros from './components/RQSuperHeros.page';
import {QueryClientProvider,QueryClient} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import TestComponen from './components/TestComponen';
import RQSuperHero from './components/RQSuperHero';
import ParallelQueries from './components/ParallelQueries.pages';
import DynamicParallel from './components/DynamicParallel.page';
import DepedentQueries from './components/DepedentQueries.page';
import PaginantedQuers from './components/PaginantedQuers';
import InfiteQuery from './components/InfiteQuery';
const queryClient=new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <>
    <Navbar/>
<Routes>
<Route path='/' element={<Homepage/>}></Route>

<Route path='/super-heroes' element={<SuperherosPage/>}></Route>
<Route path='/rq-infiteQuery' element={<InfiteQuery/>}></Route>
<Route path='/parallelquery' element={<ParallelQueries/>}></Route>
<Route path='/rq-dependentquery' element={<DepedentQueries email="vishwas@example.com"/>}></Route>
<Route path='/rq-dynamicquery' element={<DynamicParallel  heroId={[1,2]}/>}></Route>
<Route path='/rq-super-heroes/:heroId' element={<RQSuperHero/>}/>
<Route path='/rq-super-heroes' element={<RQSuperHeros/>}></Route>
<Route path='/rq-paginatedquery' element={<PaginantedQuers/>}></Route>
<Route path='/test' element={<TestComponen/>}></Route>


</Routes>
</>
<ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
</QueryClientProvider>
  );
}

export default App;
