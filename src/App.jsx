import "./style/global.css"; // global.css 를 불러오고 싶다. from이 안붙음
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./routes/Home.jsx";
import Detail from "./routes/Detail.jsx";



function App() {
    return (
        <BrowserRouter>
            {/*
                BrowserRouter 로 감싸주어서, URL이 변경됨을 감지하여
                페이지 이동 처리를 할 수 있도록 함.
                => BrowserRouter가 감싸지지 않은 컴포넌트는 안 바뀐다.
            */}
            <Routes>
                {/*
                    Route는 2가지 속성을 가짐
                    path 속성 : 이 분기에 해당하는 URL(경로)로 들어오면
                    element 속성 : 넣어준 값의 컴포넌트를 화면에 렌더링해줘
                */}
                <Route path={"/"} element={<Home />} />
                <Route path={"/:id"} element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
