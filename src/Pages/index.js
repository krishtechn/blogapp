import { RiUserAddLine,RiLockPasswordFill } from 'react-icons/ri';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AiFillStar} from 'react-icons/ai';
import { MdEmail } from 'react-icons/md'
import BlogCard from '../Components';
import BlogCards from '../Components/BlogCards';
import { useParams,Link } from 'react-router-dom';

let url = "https://jsonplaceholder.typicode.com/posts";

let latestpost = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
];

let shortdesc = [
  "Programming is the process of creating sets of instructions, known as code, that can be executed by a computer to perform specific tasks or solve problems. It involves designing, writing, testing, debugging, and maintaining the source code of computer programs.",
    "Programmers use programming languages to communicate with computers. Programming languages provide a structured way to write instructions that can be easily understood by both humans and machines. Some popular programming languages include Python, Java, C++, JavaScript, Ruby, and many more.",
    "Here are some key concepts and activities related to programming:",
    "Variables: Variables are used to store and manipulate data in a program. They can hold different types of values, such as numbers, text, or Boolean values.",
    "Control structures: Control structures allow you to control the flow of execution in a program. Examples include if statements, loops (such as for and while loops), and switch statements.",
    "Functions: Functions are reusable blocks of code that perform specific tasks. They can be called from different parts of a program, making the code modular and easier to understand and maintain.",
    "Data structures: Data structures provide a way to organize and store data efficiently. Examples include arrays, lists, stacks, queues, and trees.",
    "Algorithms: Algorithms are step-by-step procedures or methods for solving specific problems. They can be implemented using programming languages and are crucial for efficient problem-solving.",
    "Debugging: Debugging is the process of finding and fixing errors, or bugs, in a program. This involves identifying issues, tracing the program's execution, and making necessary corrections.",
    "Software development methodologies: Various methodologies, such as Agile or Waterfall, provide a structured approach to develop software applications. They involve planning, designing, implementing, testing, and maintaining software systems.",
    `Integrated Development Environments (IDEs): IDEs are software tools that provide a comprehensive environment for writing, testing, and debugging code. They often include features like code editors, compilers, debuggers, and version control systems.
    Continuous learning: Programming is a field that requires continuous learning and staying up-to-date with the latest programming languages, frameworks, libraries, and best practices. Regularly learning new concepts and techniques helps improve coding skills and efficiency.
    These are just some of the fundamental aspects of programming. The field is vast and diverse, with various specialized areas such as web development, mobile app development, artificial intelligence, data science, and more.`,
    "Programming is the process of creating sets of instructions, known as code, that can be executed by a computer to perform specific tasks or solve problems. It involves designing, writing, testing, debugging, and maintaining the source code of computer programs.",
    "Programmers use programming languages to communicate with computers. Programming languages provide a structured way to write instructions that can be easily understood by both humans and machines. Some popular programming languages include Python, Java, C++, JavaScript, Ruby, and many more.",
    "Here are some key concepts and activities related to programming:",
    "Variables: Variables are used to store and manipulate data in a program. They can hold different types of values, such as numbers, text, or Boolean values.",
    "Control structures: Control structures allow you to control the flow of execution in a program. Examples include if statements, loops (such as for and while loops), and switch statements.",
    "Functions: Functions are reusable blocks of code that perform specific tasks. They can be called from different parts of a program, making the code modular and easier to understand and maintain.",
    "Data structures: Data structures provide a way to organize and store data efficiently. Examples include arrays, lists, stacks, queues, and trees.",
  ]
  

export {RiUserAddLine,RiLockPasswordFill,MdEmail,AiFillStar,ToastContainer,toast,BlogCard,shortdesc,BlogCards,useParams,Link,url,latestpost}