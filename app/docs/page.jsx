export default function Docs() {
  return (
    <div className="font-mono text-white  bg-gray-900 text-center">
      <div className="w-auto h-px bg-indigo-500 "></div>
      <h1 className="mb-6 text-4xl font-bold text-indigo-500 p-4 text-center">
        MEOWFACTS
      </h1>
      <p className="mb-8 text-white p-4">
        Introducing the Random Cat Fact API - Your Gateway to Feline
        Fascination! With diverse and engaging cat facts, this API provides a
        constant supply of captivating information about our beloved feline
        friends. It offers real-time randomization, ensuring each request
        returns a unique fact. Integration is easy with developer-friendly
        documentation and flexible endpoints. Regular updates keep the content
        fresh and relevant.
      </p>
      <h2 className="mb-7 text-center text-2xl font-bold text-indigo-500">
        Getting Started
      </h2>
      <h3 className="p-4">Example Usage</h3>
      <div className="flex items-center justify-center">
        <div className=" flex max-w-screen-md justify-center bg-slate-950 sm:m-14 ">
          <div className=" p-6 text-white">
            <p>
              fetch("https://meowfacts.herokuapp.com/") .then((response) ={">"}
              response.json()) .then((data) ={">"} console.log(data))
              .catch((error) ={">"} console.log(error));
            </p>
          </div>
        </div>
      </div>
      <p className="p-4">Response</p>
      <div className="flex items-center justify-center">
        <div className=" flex max-w-screen-md justify-center bg-slate-950 sm:m-14 ">
          <div className="m-5 p-1 text-white">
            <p>"Mother cats teach their kittens to use the litter box."</p>
          </div>
        </div>
      </div>
      <h3 className="mb-4 text-2xl font-bold text-indigo-500 pt-6 pb-4 p-4 text-center">
        Advanced Usage
      </h3>
      <p className="p-4">
        You can request more than one fact at a time by using the GET param{" "}
        count
      </p>
      <div className="flex items-center justify-center">
        <div className=" flex max-w-screen-md justify-center bg-slate-950 sm:m-14 ">
          <div className="m-5 p-1 text-white">
            <p>
              fetch("https://meowfacts.herokuapp.com/?count=3") .then((response)
              ={">"}
              response.json()) .then((data) ={">"} console.log(data))
              .catch((error) ={">"} console.log(error));
            </p>
          </div>
        </div>
      </div>
      <p className="p-4">Response</p>
      <div className="flex items-center justify-center">
        <div className=" flex max-w-screen-md justify-center bg-slate-950 sm:m-14 ">
          <div className="m-5 p-1 text-white">
            <p>
              {" "}
              "0": "Mother cats teach their kittens to use the litter box.",
              "1": "A cat can sprint at about thirty-one miles per hour.", "2":
              "The worlds richest cat is worth $13 million after his human
              passed away and left her fortune to him."
            </p>
          </div>
        </div>
      </div>
      <p className="p-6">
        You can request a specific fact if you know the ID / order it is buy
        passing the GET param id
      </p>
      <div className="flex items-center justify-center">
        <div className=" flex max-w-screen-md justify-center bg-slate-950 sm:m-14 ">
          <div className="m-5 p-1 text-white">
            <p>
              fetch("https://meowfacts.herokuapp.com/?id=3") .then((response) =
              {">"}response.json()) .then((data) ={">"} console.log(data))
              .catch((error) ={">"} console.log(error));
            </p>
          </div>
        </div>
      </div>
      <p className="py-6">Response</p>
      <div className="flex items-center justify-center">
        <div className=" flex max-w-screen-md justify-center bg-slate-950 sm:m-14 ">
          <div className="m-5 p-1 text-white">
            <p>"Mother cats teach their kittens to use the litter box."</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="mb-4 pt-4 pb-4 text-2xl font-bold text-indigo-500 text-center">
          Language Support
        </h3>
        <p className="py-6">
          You can request the response in different languages by using the GET
          param lang
        </p>
        <div className="flex items-center justify-center">
          <div className=" flex max-w-screen-md justify-center bg-slate-950 sm:m-14 ">
            <div className="m-5 p-1 text-white">
              <p>https://meowfacts.herokuapp.com/?lang=ukr</p>
            </div>
          </div>
        </div>
        <p className="py-6">Response</p>
        <div className="flex items-center justify-center">
          <div className=" flex max-w-screen-md justify-center bg-slate-950 sm:m-14 ">
            <div className="m-5 p-1 text-white">
              <p>
                "Найбагатший у світі кіт коштує 13 мільйонів доларів після того,
                як його людина померла і залишила йому свій стан"
              </p>
            </div>
          </div>
        </div>
        <h4 className="py-7">Supported Languages</h4>
        <p className="pb-1">
          The supported languages are listed below, you can use any of the lang
          Values in the first column as a lang param.
        </p>
        <p className="pb-6">
          "?lang=esp" and "?lang=esp-mx" will both return spanish for your
          response, and simply using the ISO-639-1 will default to esp-mx for
          simplicity.
        </p>
        <div className="flex items-center justify-center">
          <div className=" flex max-w-screen-md justify-center bg-slate-950 sm:m-14 ">
            <div className="m-5 p-1 text-white">
              <table>
                <thead>
                  <tr>
                    <th>LANG Variable</th>
                    <th>
                      <a href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_s">
                        ISO 639-1
                      </a>
                    </th>
                    <th>Language Name</th>
                    <th>Localization (country)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>eng-us</td>
                    <td>eng</td>
                    <td>English</td>
                    <td>USA</td>
                  </tr>
                  <tr>
                    <td>ces-cz or cze-cz</td>
                    <td>cze (B) ces (T)</td>
                    <td>Czech</td>
                    <td>CZ</td>
                  </tr>
                  <tr>
                    <td>ger-de</td>
                    <td>ger</td>
                    <td>German</td>
                    <td>DE</td>
                  </tr>
                  <tr>
                    <td>esp-es</td>
                    <td>esp</td>
                    <td>Spanish</td>
                    <td>ES</td>
                  </tr>
                  <tr>
                    <td>esp-mx</td>
                    <td>esp</td>
                    <td>Spanish (default)</td>
                    <td>MX</td>
                  </tr>
                  <tr>
                    <td>rus-ru</td>
                    <td>rus</td>
                    <td>Russian</td>
                    <td>RUS</td>
                  </tr>
                  <tr>
                    <td>por-br</td>
                    <td>por</td>
                    <td>Portuguese</td>
                    <td>BR</td>
                  </tr>
                  <tr>
                    <td>tl-fil</td>
                    <td>fil</td>
                    <td>Filipino</td>
                    <td>PH</td>
                  </tr>
                  <tr>
                    <td>ukr-ua</td>
                    <td>ukr</td>
                    <td>Ukrainian</td>
                    <td>UA</td>
                  </tr>
                  <tr>
                    <td>urd-ur</td>
                    <td>urd</td>
                    <td>Urdu</td>
                    <td>UR</td>
                  </tr>
                  <tr>
                    <td>ita-it</td>
                    <td>ita</td>
                    <td>Italian</td>
                    <td>IT</td>
                  </tr>
                  <tr>
                    <td>zho-tw</td>
                    <td>zho</td>
                    <td>Chinese</td>
                    <td>TW (Taiwan)</td>
                  </tr>
                </tbody>
              </table>{" "}
            </div>
          </div>
        </div>
        <details>
          <summary>
            Help us expand and improve Internationalization on this API (Click
            to expand)
          </summary>
          <h3>Help us expand and improve Internationalization on this API</h3>

          <p>
            <b>Note:</b> We are trying to follow the browser's language tags,
            which are formally defined in
            <a href="https://datatracker.ietf.org/doc/html/rfc5646">RFC 5646</a>
            , which rely on the
            <a href="https://en.wikipedia.org/wiki/ISO_639">ISO 639</a>
            standard (quite often the
            <a href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_s">
              639-1 list
            </a>
            ) for
            <a href="https://en.wikipedia.org/wiki/Language_">language s</a>
            to be used.
          </p>

          <p>
            We would love it if you helped this project by taking a look at our
            <a href="https://github.com/wh-iterabb-it/meowfacts/issues/175">
              Call for Contributors
            </a>
            to see if you can make a contribution that helps us be more
            inclusive and support more languages.
          </p>
        </details>
      </div>
    </div>
  );
}
