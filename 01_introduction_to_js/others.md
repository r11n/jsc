---
layout: default
parent: '/'
parent_name: 'chap'
---
# Others
## Webservice
A web service is a data service or a piece of software that is available over the internet for a consumer to get data from it. Web services are self-contained, modular, distributed, dynamic applications that can be described, published, located, or invoked over the network to create products, processes, and supply chains.

Web services are XML-based information exchange systems that use the Internet for direct application-to-application interaction. These systems can include programs, objects, messages, or documents.

### The Components
A web service basically comprises of the following:
* SOAP - (Simple Object Access Protocol)
* UDDI - (Universal Description, Discovery and Integration)
* WSDL - (Web Services Description Language)

### How it works?
Consider a user signup scenario in any system. The end user application(can be mobile app or a website) provides a form to take in the user data. Lets say we have a webservice to save the user and provide us with the response about the user.

The steps are performed in the following order:


* The mobile app or website bundles the account registration information into a SOAP message.

* This SOAP message is sent to the web service as the body of an HTTP POST request.

* The web service unpacks the SOAP request and converts it into a command that the application can understand.

* The application processes the information as required and responds with a new unique account number for that user.

* Next, the web service packages the response into another SOAP message, which it sends back to the client program in response to its HTTP request.

* The client program unpacks the SOAP message to obtain the results of the account registration process.

## REST vs SOAP
SOAP and REST both allow you to create your own API. API stands for Application Programming Interface.An API receives requests and sends back responses through internet protocols such as HTTP, SMTP, and others.

SOAP and REST are two API styles that approach the question of data transmission from a different point of view. SOAP is a standardized protocol that sends messages using other protocols such as HTTP and SMTP. The SOAP specifications are official web standards, maintained and developed by the World Wide Web Consortium (W3C). As opposed to SOAP, REST is not a protocol but an architectural style. The REST architecture lays down a set of guidelines you need to follow if you want to provide a RESTful web service, for example, stateless existence and the use of HTTP status codes.

### REST
REST stands for Representational State Transfer. It’s an architectural style that defines a set of recommendations for designing loosely coupled applications that use the HTTP protocol for data transmission. REST doesn’t prescribe how to implement the principles at a lower level. Instead, the REST guidelines allow developers to implement the details according to their own needs. Web services built following the REST architectural style are called RESTful web services.

To create a REST API, you need to follow six architectural constraints:

* **Uniform interface** – Requests from different clients should look the same, for example, the same resource shouldn’t have more than one URI.

* **Client-server separation** – The client and the server should act independently. They should interact with each other only through requests and responses.

* **Statelessness** – There shouldn’t be any server-side sessions. Each request should contain all the information the server needs to know.

* **Cacheable resources** – Server responses should contain information about whether the data they send is cacheable or not. Cacheable resources should arrive with a version number so that the client can avoid requesting the same data more than once.

* **Layered system** – There might be several layers of servers between the client and the server that returns the response. This shouldn’t affect either the request or the response.

* **Code on demand [optional]** – When it’s necessary, the response can contain executable code (e.g., JavaScript within an HTML response) that the client can execute.

#### pros
* seamless
* easy
* easy data wrapping
* data driven

#### cons
* less secure(depends on the system)

### SOAP
SOAP stands for Simple Object Access Protocol. It’s a messaging protocol for interchanging data in a decentralized and distributed environment. SOAP can work with any application layer protocol, such as HTTP, SMTP, TCP, or UDP. It returns data to the receiver in XML format. Security, authorization, and error-handling are built into the protocol and, unlike REST, it doesn’t assume direct point-to-point communication. Therefore it performs well in a distributed enterprise environment.

SOAP follows a formal and standardized approach that specifies how to encode XML files returned by the API. A SOAP message is, in fact, an ordinary XML file that consists of the following parts:

* Envelope (required) – This is the starting and ending tags of the message.
* Header (optional) – It contains the optional attributes of the message. It allows you to extend a SOAP message in a modular and decentralized way.
* Body (required) – It contains the XML data that the server transmits to the receiver.
* Fault (optional) – It carries information about errors occurring during processing the message.
#### pros
* more secure
* legacy support
#### cons
* only XML support
* resource consuming and complex


