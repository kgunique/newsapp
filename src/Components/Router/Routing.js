import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import Expense from "../Pages/Expense";
import HomePage from "../Pages/HomePage";
import Income from "../Pages/Income";
import NoPage from "../Pages/NoPage";
import AddUser from "../Pages/User/AddUser";
import ViewUser from '../Pages/User/ViewUser'


function Routing(){
    return(
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route exact path="/" element= {<Navbar/>} />
                <Route index element= {<HomePage/>} />
                <Route exact path = "/income" element= {<Income/>} />
                <Route exact path = "/expense" element= {<Expense/>} />
                <Route exact path = "/user/add" element= {<AddUser/>} />
                <Route exact path = "/user/view/:id" element= {<ViewUser/>} />
                <Route path = "*" element={<NoPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing  