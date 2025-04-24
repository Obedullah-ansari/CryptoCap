⚙️ Setup Instructions
-----------------------------------------
1>> Clone the Repository:

bash
git clone <repository_url>
Install Dependencies:

2>>If using npm:

bash
npm install
or:
If using yarn:
bash
yarn install

3>>Run the Project:
bash
npm run dev
Or:

bash
yarn dev

.....................................................................................................................

🛠 Tech Stack + Architecture
-------------------------------------
Frontend: React, Redux Toolkit, Tailwind CSS.
State Management: Redux Toolkit .
Deployment: Vercel.

Architecture Overview:
----------------------------
1>> Dummy Data:

Created sampleData in the utils folder to represent initial cryptocurrency data (e.g., name, symbol, price).

2>> CryptoTable Component:

Displays the list of cryptocurrencies in a modern table layout, styled with Tailwind CSS for a clean, responsive UI.

3>> Chart Display:

Integrated Chart.js to visualize the price trends of cryptocurrencies in a graphical format.

4>> State Management with Redux:

Used Redux Toolkit to manage the global state of the app.

Created a Redux store that holds the list of cryptocurrencies and their real-time data.

5>> Simulating Real-Time Updates:

Implemented setInterval to simulate live data updates.

Randomly updates cryptocurrency prices and dispatches changes to Redux store.

6>> Displaying Updated Data:

After data is updated in the Redux store, the CryptoTable component reflects the new prices in real-time.

.................................................................................................................................

[![📷Screen Short](./src/demo/ss.png)]

Live Link :https://crypto-cap-beta.vercel.app/

