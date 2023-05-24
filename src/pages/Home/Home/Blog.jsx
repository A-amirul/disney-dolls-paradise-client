import useTitle from "../../../useTitle";

const Blog = () => {
	useTitle('Blog');
	return (
		<div className="md:px-56 mx-auto bg-base-200">
			<div className="p-8 pt-10">
				<h2 className="text-3xl font-bold">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
				<div className="text-xl pt-4">

					<strong className="text-2xl">Access Token</strong>
					<p>An access token is a credential that is obtained after a user successfully authenticates with a server or identity provider.It is a short-lived token with an expiration time, typically ranging from a few minutes to a few hours.The access token is used to authorize and authenticate the users requests to access protected resources (e.g., APIs, services).When a user makes a request to a protected resource, they include the access token in the request header or as a query parameter.</p>
				</div>
				<div className="text-xl">
					<strong className="text-2xl">Refresh Token</strong>
					<p>A refresh token is a long-lived token that is issued alongside the access token during the authentication process.
						It is used to obtain a new access token when the current one expires or becomes invalid without requiring the user to reauthenticate.
						Refresh tokens have a longer expiration time compared to access tokens, ranging from days to months.
						When the access token expires, the client can make a request to the server with the refresh token to obtain a new access token without requiring the user to provide their credentials again.</p>
				</div>

				<div className="text-xl py-4">
					<strong className="text-2xl ">How do they work and where should we store them on the client-side?</strong>
					<p>Access tokens and refresh tokens should be stored securely to prevent unauthorized access.
						Access tokens are typically stored in memory or in a client-side storage mechanism like browser cookies or local storage.
						Refresh tokens, being long-lived and more sensitive, should be stored in a more secure manner, such as an HTTP-only cookie with the Secure flag set or in a server-side session storage managed by the backend.
						The storage mechanism chosen depends on the security requirements and the platform you are working with. Always consider security best practices and follow guidelines specific to your development environment.
						Its important to note that the specifics of token management can vary depending on the authentication system, framework, or technology you are using. Always refer to the documentation and best practices provided by the framework or library you are working with.</p>

				</div>
			</div>

			<div className="p-8">
				<h2 className="text-3xl font-bold my-8">2. Compare SQL and NoSQL databases? </h2>
				<div className="text-xl">
					<strong className="text-2xl">SQL database</strong>
					<li>Relational Database Management System (RDBMS).</li>
					<li>These databases have fixed or static or predefined schema.</li>
					<li>These databases are not suited for hierarchical data storage.</li>
					<li>These databases are best suited for complex queries.</li>
					<li>Vertically Scalable.</li>
					<li>Follows ACID property.</li>
					<li>Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server, etc</li>
				</div>

				<div className="text-xl py-4">
					<strong className="text-2xl">NoSQL Database</strong>
					<li>Non-relational or distributed database system.</li>
					<li>They have a dynamic schema.</li>
					<li>These databases are best suited for hierarchical data storage.</li>
					<li>These databases are not so good for complex queries.</li>
					<li>Horizontally scalable.</li>
					<li>Follows CAP(consistency, availability, partition tolerance).</li>
					<li>Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra, etc.</li>
				</div>
			</div>

			<div className="p-8">
				<h2 className="text-3xl font-bold" >3. What is express js? What is Nest JS?</h2>
				<div className="text-xl my-6">
					<strong className="text-2xl my-4">What is express js?</strong>
					<p className="mb-4">Express.js is a small framework that works on top of Node.js web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middleware and routing. It adds helpful utilities to Node.js HTTP objects and facilitates the rendering of dynamic HTTP objects.</p>

					<strong className="text-2xl">What is Nest JS?</strong>
					<p>Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).Under the hood, Nest makes use of robust HTTP Server frameworks like Express (the default) and optionally can be configured to use Fastify as well!Nest provides a level of abstraction above these common Node.js frameworks (Express/Fastify), but also exposes their APIs directly to the developer. This gives developers the freedom to use the myriad of third-party modules which are available for the underlying platform.

					</p>
				</div>
			</div>
			<div className="p-8">
				<h2 className="text-3xl font-bold" >4. What is MongoDB aggregate and how does it work?</h2>
				<div className="text-xl my-4">
					<strong className="text-2xl">What is MongoDB aggregate?</strong>
					<p className="mb-4">Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.One of the most common use cases of Aggregation is to calculate aggregate values for groups of documents. This is similar to the basic aggregation available in SQL with the GROUP BY clause and COUNT, SUM and AVG functions. MongoDB Aggregation goes further though and can also perform relational-like joins, reshape documents, create new and update existing collections, and so on.While there are other methods of obtaining aggregate data in MongoDB, the aggregation framework is the recommended approach for most work.</p>

					<strong className="text-2xl">How does the MongoDB aggregation pipeline work?</strong>
					<p>
						<li>$match stage – filters those documents we need to work with, those that fit our needs</li>
						<li>$group stage – does the aggregation job</li>
						<li>$sort  stage – sorts the resulting documents the way we require (ascending or descending)</li>

						<p className="mt-4">The input of the pipeline can be a single collection, where others can be merged later down the pipeline.The pipeline then performs successive transformations on the data until our goal is achieved.This way, we can break down a complex query into easier stages, in each of which we complete a different operation on the data. So, by the end of the query pipeline, we will have achieved all that we wanted.This approach allows us to check whether our query is functioning properly at every stage by examining both its input and the output. The output of each stage will be the input of the next.</p>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Blog;