# DENO


Deno is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust.
1.  Secure by default. No file, network, or environment access, unless explicitly enabled.
2.  Supports TypeScript out of the box.
3.  Ships only a single executable file.
4.  Has built-in utilities like a dependency inspector (deno info) and a code formatter (deno fmt).
5.  Has a set of reviewed (audited) standard modules that are guaranteed to work with Deno:  [deno.land/std](https://deno.land/std)

## Why do we need to use Deno?

If there is already **Node.js** and other programming languages to build the APIs why we need to use Deno from now.
The answer for that is there are many features, as they know, which are making it needed for the future.

 1. **Easy**
	  Deno is easy to get started and no need for any prior knowledge.
	  Its Good for prototyping and [Agile Development](https://en.wikipedia.org/wiki/Agile_software_development).
 2. **Reusable and scalable**
	 Deno saves time and lines of code.Almost 40% fewer lines of code and 30 % fewer files.And also much faster in requests speeds and more faster in response time.It has many built-in utilities.
 3. **Secure**
		Deno is secure by default.
		No file or network or environment access unless we have to enable it.
		
 4. **Typescript**
  The most great feature is that Deno is using typescript out of the box.
  
 5. **No package manager**
 It has also no package manager,and so no big node module folder anymore. When  call the libraries which we need they are directly cashed on the file system.
It minimizes also the core API size while providing a large standard library with not any external dependency.

## Architecture of Deno
 Deno is like Node.js a runtime environment for executing JavaScript code.
Before Node.js and Deno, we use the JavaScript code to build applications which can run on the browsers.
But now the JavaScript code can run on more than a browser using the same JavaScript engine, which is called **V8 Engine.**
**Ryan Dahl** was able to do that in Node.js using **C++** and now Deno is based on **Rust**.
## Will Deno replace NodeJS?
**NO**, It won't in recent, **NodeJS** is a giant, well established, incredibly well supported technology that is going to stay for decades.
The main difference between Node and Deno is that Deno has first class typescript support.
As we mentioned before Deno is written in Rust And TypeScript, two of the languages that today are really growing fast, in particular being written in typescript mean that we get a lot of benefits of typescript, even if we might choose to write our code in a plain JavaScript.
And running typescript go to with Deno doesn't require a compilation step, Deno does that automatically
We are NOT FORCED to write in TypeScript.
This means that when we code in **visual studio code**, for example, which is really a tight integration with TypeScript, since both of them are developed at Microsoft, we can get benefits like type checking, debugging etc.
[](https://deno.land/#installation)

## Installation
Deno ships as a single executable with no dependencies. You can install it using the installers below, or download a release binary from the  [releases page](https://github.com/denoland/deno/releases).

Shell (Mac, Linux):

    $ curl -fsSL https://deno.land/x/install/install.sh |  sh

PowerShell (Windows):
```
$ iwr https://deno.land/x/install/install.ps1 -useb | iex
```
[Homebrew](https://formulae.brew.sh/formula/deno)  (Mac):
```
$ brew install deno
```

[Chocolatey](https://chocolatey.org/packages/deno)  (Windows):
```
$ choco install deno
```

Scoop (Windows):

```
$ scoop install deno
```

Build and install from source using  [Cargo](https://crates.io/crates/deno)

```
$ cargo install deno
```
See  [deno_install](https://github.com/denoland/deno_install)  for more installation options.

### Getting Started

Check the the Deno version and Deno help

    $ deno --version
    $ deno --help

Do our math in Deno REPL just like Node REPL

    deno

Try running a simple program:
```
deno run https://deno.land/std/examples/welcome.ts
```

Or a more complex one:

```
import  { serve }  from  "https://deno.land/std@0.59.0/http/server.ts";
const s =  serve({ port:  8000  });
console.log("http://localhost:8000/");
for  await  (const req of s)  {
   req.respond({ body:  "Hello World\n"  });
}
```
You can find a more in depth introduction, examples, and environment setup guides in  [Deno manual](https://deno.land/manual).

## First Deno Program

Now that we are ready to roll. We can create our first deno program.
Let's create a new folder for our application:

```
$ mkdir deno-basics
$ cd deno-basics
```
Create a file called `app.ts` with the following content:

    const message: string = "Hello world!";
    console.log(message);
Now we can run our program by command in console `deno app.ts`

    ~/deno-basics$ deno app.ts
This will gave output as

> Compile file:///Users/project/deno-basics/app.ts 
> Hello world!

Let's change the type of message as `number` and save and run the program.

    const message: number = "Hello world!";
    console.log(message);
    
This will gave output as
> Compile file:///Users/project/deno-basics/app.ts
error: TS2322 [ERROR]: Type '"hello"' is not assignable to type 'number'.
const greetings: number = "hello";
   at file:///Users/project/deno-basics/app.ts:1:7

it will give us error that it's this value is not assigned to a number.
Because it's a string.
So in this way, we guarantee that Deno is doing all the compiling stuff, even it's running a typescript compiler.

And deno will compile and run javascript files also
Let check
Create a file called `app.ts` with a function as:

    const  welcome = (content) => {
       console.log("Hi " + content);
    };
    welcome("there!");
 and save and run the javascript file`app.js` 
 
    ~/deno-basics$ deno app.js
Now check the output
> Hi there!

Yes ,Deno also compliling and running Javascript files.Its Great!


## Modules
### User-defined Modules
Module can be created using that keyword `export` and also the module can be imported into another module using keyword `import`

Create a file called `student.ts` with following content

    //student.ts
    export  class  Student {
	    id: number;
	    name: string;
	    constructor(_id: number, _name: string) {
		    this.id = _id;
		    this.name = _name;
	    }
	    displayStudent() {
		    console.log(`Student Id: ${this.id}, Student Name : ${this.name}`);
	    }
    }
and now create file called `main.ts` and import the module `Student`

    //main.ts
    import { Student } from  "./student.ts";
    const  student = new  Student(100, "Anand");
    student.displayStudent()

Run `main.ts` 

    $ deno run main.ts

> //output
> Compile file:///Users/deno-basics/main.ts
Student Id: 100, Student Name : Anand

### Deno - Standard Modules and  Third Party Modules

Let's navigate to Deno website.
And then go to standard library in the standard library([deno.land/std](https://deno.land/std)).
We see many modules which are developed by Deno core team.
So they are building libraries which have good quality of the code and can be used.These audited standard modules that are reviewed by the core Deno team and are guaranteed to work with a specific Deno version. 
These standard modules are hosted at  [deno.land/std](https://deno.land/std)  and are distributed via URLs like all other ES modules that are compatible with Deno.
Let's navigate to one of these libraries.
Let pick [datetime](https://deno.land/std/datetime).

In our file `main.ts` import the module as

    //main.ts
    import { dayOfYear,currentDayOfYear} from "https://deno.land/std/datetime/mod.ts";
    console.log(dayOfYear(new  Date()));

Run `main .ts`

    $ deno run main.ts

>//output
> Download https://deno.land/std/datetime/mod.ts
Warning Implicitly using master branch https://deno.land/std/datetime/mod.ts
Compile file:///Users/anands/anand/hobbies/deno-learning/main.ts
**182**

We could see that the library is got downloaded.
Again run the `main.ts`

> **182**
> 
But in the second time we don't see it downloaded.
This is a strength of Deno that it's caching.The libraries on your machine. So we don't need to download them again to install library.

Or we can install deno libraries as

    $ deno install "PATH_TO_MODULE"

eg:
let's install `fs` module is made to provide helpers to manipulate the filesystem.

    $ deno install "https://deno.land/std/fs/mod.ts"


Deno can import modules from any location on the web, like GitHub, a personal webserver, or a CDN like  [pika.dev](https://pika.dev/)  or  [jspm.io](https://jspm.io/).
deno.land also provides a simple public hosting service for ES modules that work with Deno. 
The third party modules can be found at  [deno.land/x](https://deno.land/x).
### HTTP Module and Web Server
Let's create a web server
For that we should import `HTTP` module that we saw in standard deno modules.
Let's do that
In our file `main.ts` import the `HTTP` module as follows

    import { serve } from  "https://deno.land/std/http/server.ts";
   
   Now we should create a web server on specified port.For that we have to define  the port number.
   

```server
 const port: number = 8000;//Typescript 
 const  webServer = serve({ port:  port });
```   
And now we are going to console log some information that this server has already started on the localhost:8000.
The server now is ready for receiving requests from the clients in this way.
Then we are going to create a for loop with a `await` function which is waiting for requests from the web server.
And this web server will respond with a specific body about that request.
So the Web server now will have it.

    console.log("server started on port "+ port);
    for await (const req of webServer) {
       req.respond({ body: "Hello world!" });
    }

Now the file `main.ts` looks like


  

    import { serve } from  "https://deno.land/std/http/server.ts";
    
    const  webServer = serve({ port: 8000 });
    
    console.log("server started on port 8000");
    for await (const req of webServer) {
	    req.respond({ body: "Hello world!" });
    }

This  respond body can be a string or object of specific data which comes from database.
So now I am going to run this application.

     $ deno run main.ts

And we noticed that we need the permissions to run.
So we get the error, error, permission is denied because we need to do allow net.
This is parameter.

     --allow-net

We can do it with a command run as,

    deno run --allow-net main.ts

Yeah, now its worked and check the localhost:8000 on the browser and we will see the response of that body,that we assigned.
## Happy coding
This is it – we are done.
If you still feel stuck, take a look at Deno [Documentation](https://deno.land/manual)
For learning basic types of typescript ,please follow [https://www.typescriptlang.org/docs/handbook/basic-types.html](https://www.typescriptlang.org/docs/handbook/basic-types.html)
I hope that you found this article useful and that it was able to help you start deno programming.
I wish you happy coding.
**#learnandgrow** 






