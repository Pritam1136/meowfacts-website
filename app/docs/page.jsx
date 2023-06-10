export default function Docs() {
  return (
    <div className="font-mono">
      <div className="h-px w-auto bg-slate-500"></div>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900">
        <div className="mx-auto max-w-3xl px-4 py-8">
          <h1 className="mb-6 text-4xl font-bold text-indigo-500">MEOWFACTS</h1>
          <p className="mb-8 text-white">
            Introducing the Random Cat Fact API - Your Gateway to Feline
            Fascination! With diverse and engaging cat facts, this API provides
            a constant supply of captivating information about our beloved
            feline friends. It offers real-time randomization, ensuring each
            request returns a unique fact. Integration is easy with
            developer-friendly documentation and flexible endpoints. Regular
            updates keep the content fresh and relevant. The API is lightweight,
            fast, and reliable, delivering a seamless user experience. Use it
            for websites, blogs, mobile apps, or social media bots. Let the
            Random Cat Fact API enchant your audience with the captivating world
            of cats in just 10 lines of code!
          </p>
          <h2 className="mb-4 text-2xl font-bold text-indigo-500">
            Getting Started
          </h2>
          <p className="mb-6 text-white">
            To get started with SnippetHub, follow the steps below:
          </p>
          <ol className="mb-8 list-inside list-decimal text-white">
            <li>Create an account on SnippetHub.</li>
            <li>Login to your account and explore the available features.</li>
            <li>
              Manage your snippets by creating, editing, and deleting them.
            </li>
            <li>Share your snippets with the SnippetHub community.</li>
          </ol>
          <h2 className="mb-4 text-2xl font-bold text-indigo-500">Features</h2>
          <ul className="mb-8 list-inside list-disc text-white">
            <li>Snippet creation and editing.</li>
            <li>Search for snippets based on tags or keywords.</li>
            <li>Like and comment on snippets.</li>
            <li>Follow other users and discover their snippets.</li>
            <li>Bookmark your favorite snippets for quick access.</li>
          </ul>
          <h2 className="mb-4 text-2xl font-bold text-indigo-500">
            Best Snippets
          </h2>
          <p className="mb-6 text-white">
            Discover the best snippets for buttons, cards, headers, and footers,
            all written in React and Tailwind CSS:
          </p>
          {/* Add code snippets or links to the best snippets here */}
          <h2 className="mb-4 text-2xl font-bold text-indigo-500">
            Customization Options
          </h2>
          <p className="mb-6 text-white">
            SnippetHub provides various customization options to make your
            snippets unique and tailored to your needs. Customize colors,
            styles, and layouts to create visually appealing snippets.
          </p>
          <h2 className="mb-4 text-2xl font-bold text-indigo-500">
            Community and Collaboration
          </h2>
          <p className="mb-6 text-white">
            SnippetHub fosters a thriving community of developers. Connect with
            fellow developers, collaborate on projects, and share your knowledge
            and expertise.
          </p>
          <p className="text-white">
            For any further assistance or inquiries, please contact our support
            team at support@snippethub.com.
          </p>
        </div>
      </div>
    </div>
  );
}
