import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container blogs-part'>

            <h2>Question And Answer Part: </h2>

            <div className='mt-5 answer'>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Difference between javascript and nodejs</Accordion.Header>
                        <Accordion.Body>

                            <h4>Javascript: </h4>
                            <p>1. JavaScript is a simple programming language that runs in any browser JavaScript Engine.</p>
                            <p>2. JavaScript is normally used for any client-side activity for one web application</p>
                            <p>3. JavaScript running in any engine like Spider monkey 'FireFox', JavaScript 'Core Safari', V8 'Google Chrome'.</p>
                            <p>4. JavaScript is normally following Java Programming language standard. There may have some different way of writing code, but at the same time, we can say it following the Java Programming language standard.</p>

                            <br />
                            <h4>Node Js: </h4>
                            <p>1. Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses</p>
                            <p>2. Node JS mainly used for accessing or running any operating system for non-blocking operation.</p>
                            <p>3. Node JS only support the V8 engine, which googles chrome specific</p>
                            <p>4. node JS is written in C++ and provides a V8 engine base browser javascript running engine, it helps us run a written javascript program in any browser environment.</p>


                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>When should you use nodejs and when should you use mongodb</Accordion.Header>
                        <Accordion.Body>

                            <h4>When Should We Use Node Js: </h4>
                            <p>Any project needs a programming environment and a runtime library that gives you basic programming tools and support and can compile and/or interpret your code. Node.js is a kind of tool for the programming language Javascript. There are similar tools for Python, Java, PHP, C#, C++ and more </p>

                            <br />
                            <h4>When Should We Use Mongodb</h4>
                            <p>If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases.</p>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Differences between sql and NoSQL databases</Accordion.Header>
                        <Accordion.Body>

                            <h4>SQL Databases</h4>
                            <p>1. Tables with fixed rows and columns</p>
                            <p>2. Developed in the 1970s with a focus on reducing data duplication</p>
                            <p>3. Scale-up with a larger server</p>
                            <p>4. Schemas: Rigid </p>
                            <p>5. Examples: Oracle, MySQL, Microsoft SQL Server, and PostgreSQL</p>

                            <br />

                            <h4>NoSQL Databases</h4>
                            <p>1. Document: JSON documents, Key-value: key-value pairs, Wide-column: tables with rows and dynamic columns, Graph: nodes and edges</p>
                            <p>2. Developed in the late 2000s with a focus on scaling</p>
                            <p>3. scale-out across commodity servers </p>
                            <p>4. Schemas: Flexible</p>
                            <p>5. Examples: Document: MongoDB and CouchDB, Key-value: Redis and DynamoDB, Wide-column: Cassandra and HBase, Graph: Neo4j and Amazon Neptune</p>


                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What is the purpose of jwt and how does it work</Accordion.Header>
                        <Accordion.Body>
                            <p>JWT is an open standard used to share security information between a client and a server. Each JWT has a set of claims that are encoded as JSON objects. JWTs are signed with a cryptographic algorithm to make sure that the claims can't be changed after the token is issued.</p>
                            <br />
                            <h4>Purpose of JWT:</h4>
                            <p>JWT can be used as an access token to stop people from getting into a protected resource who shouldn't be able to. They are often used as Bearer tokens, which the API will decode and check before sending a response.</p>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

        </div>
    );
};

export default Blogs;