import React from 'react'
import erpnext from '../../assets/images/ERP-next.png'
import blog from '../../assets/images/blog.jpg'
import django_react from '../../assets/images/django-react.avif'
import spring_crud from '../../assets/images/spring-crud.png'

const AllProjectsArray = [
    {
       project:'ERPNext Customer Web Portal',
       desc:'A React and Tailwind CSS frontend with a Django backend using PostgreSQL and JWT authentication, enabling customers to view invoices, place orders, and track support tickets via ERPNext.',
       year:'Mar2025',
       align:'right',
       image:erpnext,
       link:'#'
    },
    {
        project:'SimpleBlog',
        desc:'A lightweight content management system built with Django, HTML/CSS templates, and a PostgreSQL database. It includes user authentication (login/register) and full CRUD functionality for managing blog posts.',
        year:'Mar2025',
        align:'left',
        image:blog,
        link:'https://github.com/Diluxshan06/django-blog-postgres.git'
    },
    {
        project:'NoteFlow',
        desc:'A note management system built with Django, React, and PostgreSQL, featuring JWT authentication, user registration, and full CRUD functionality for personal notes.',
        year:'Feb2025',
        align:'right',
        image:django_react,
        link:'https://github.com/Diluxshan06/Django-React-Full_stack.git'
    },
    {
        project:'CustomerManager',
        desc:'A web-based customer management system built with Spring Boot, Thymeleaf, and MySQL, supporting full CRUD operations for managing customer records.',
        year:'Jan2024',
        align:'left',
        image:spring_crud,
        link:'https://github.com/Diluxshan06/Customer_Details_Management.git'
    }
]

export default AllProjectsArray