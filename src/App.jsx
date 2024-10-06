import Card from "./Card.jsx";
import Food from "./Food/Food.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Student from "./Student.jsx"
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx"


  function App() {
    const fruits = [
      {id:1,name:"Apple",calories:30},
      {id:2,name:"Orange",calories:50},
      {id:3,name:"Banana",calories:100},
      {id:4,name:"Coconut",calories:80},
      {id:5,name:"melon",calories:60}
  ];
  const vegetables = [
    {id:1,name:"Potatos",calories:110},
    {id:2,name:"Celery",calories:50},
    {id:3,name:"Carrots",calories:100},
    {id:4,name:"Corn",calories:80},
    {id:5,name:"Brocoli",calories:60}
];

    return(
      <>
      <Header/>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      {fruits.length > 0 ? <List category="Fruits" items={fruits}/> : alert("Empty-Fruits-List") }
      {vegetables.length > 0 ? <List category="Vegetables" items={vegetables}/> : alert("Empty-Vegetables-List")}
      {vegetables.length > 0 ? <List  items={vegetables}/> : alert("Empty-Vegetables-List")}
      {vegetables.length > 0 ? <List  items={vegetables}/> : alert("Empty-Vegetables-List")}
      {vegetables.length > 0 ? <List  /> : alert("Empty-Vegetables-List")}
      <Student name="Merouane" age="21" isStudent={true}/>
      <Student name = "amine" age = {24}/>
      <Student />
      <UserGreeting userName="Merouane" isLoggedin={true}/>
      <UserGreeting userName={12} isLoggedin={true}/>
      <UserGreeting isLoggedin={true}/>
      <UserGreeting />
      <Food/>
      <Footer></Footer>
      </>
      
    )
  }

  export default App