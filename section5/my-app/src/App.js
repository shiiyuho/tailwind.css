import "./App.css";

function App() {
  return (
    //relative→要素の位置を相対位置に設定する
    // overflow-hidden→要素の中身がはみ出したら、はみ出した部分を見えなくする
    // before:absolute→before（疑似要素）に対してabsolute（絶対位置）を設定するためのユーティリティクラス
    // before:top-0→before（疑似要素）に対して 要素の top プロパティを 0 に設定します
    // before:start-1/2→擬似要素に対して開始位置（左端）を親要素の幅の50%に設定するために使用されます。
    // before:bg-[url('')]→URLの挿入

    <div class="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* Announcement Banner*/}
        <div class="flex justify-center">
          <a
            // rounded-full→要素の角を完全に丸くするために使用されます
            class="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:border-neutral-600 dark:text-neutral-200"
            href="#"
          >
            PRO release - Join to waitlist
            <span class="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-neutral-700 dark:text-neutral-400">
              <svg
                class="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </a>
        </div>
        {/*End Announcement Banner*/}

        {/* Title */}
        <div class="mt-5 max-w-2xl text-center mx-auto">
          <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
            Let's Build
            {/* bg-clip-text→要素の背景クリッピングをテキストの輪郭に基づいて行うために使用されます */}
            {/* bg-gradient-to-tl→背景のグラデーションの方向を指定するために使用されます */}
            <span class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
              Together
            </span>
          </h1>
        </div>
        {/* End Title */}

        <div class="mt-5 max-w-3xl text-center mx-auto">
          <p class="text-lg text-gray-600 dark:text-neutral-400">
            Preline UI is an open-source set of prebuilt UI components,
            ready-to-use examples and Figma design system based on the
            utility-first Tailwind CSS framework.
          </p>
        </div>

        {/*Buttons */}
        <div class="mt-8 gap-3 flex justify-center">
          <a
            //hover:from-violet-600→ホバー時に背景グラデーションの開始色を変更する
            class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800"
            href="#"
          >
            Get started
            <svg
              //flex-shrink-0→フレックスアイテムが縮小しないように設定するために使用されます
              class="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
          <button
            type="button"
            // relative→要素の位置を相対位置に設定するために使用されます
            // font-mono→要素のフォントファミリーを等幅フォント（モノスペースフォント）に設定するために使用されます
            // rounded-lg→要素の角を大きく丸めるために使用されます。具体的には、CSS の border-radius プロパティを設定します

            class="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
          >
            $ npm i preline
            <span class="flex justify-center items-center bg-gray-200 rounded-md size-7 dark:bg-neutral-700 dark:text-neutral-400">
              <svg
                class="flex-shrink-0 size-4 group-hover:rotate-6 transition"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              </svg>
            </span>
          </button>
        </div>
        {/*End Buttons*/}

        <div class="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
          <span class="text-sm text-gray-600 dark:text-neutral-400">
            Package Manager:
          </span>
          <span class="text-sm font-bold text-gray-900 dark:text-white">
            npm
          </span>
          <svg
            class="size-5 text-gray-300 dark:text-neutral-600"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M6 13L10 3" stroke="currentColor" stroke-linecap="round" />
          </svg>
          <a
            // decoration-2→テキストの装飾（特に下線）の太さを設定するために使用されます
            class="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium"
            href="#"
          >
            Installation Guide
            <svg
              class="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
