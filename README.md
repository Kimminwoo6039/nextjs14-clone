# 1 nextjs 프로젝트 시작하기
0. npx create-next-app@14.1.0

# 2. 필요한 패키지 미리 설치
( version issue에 대응하여 특정 버전으로 설치하기 )   
1. yarn add react-spinners@^0.13.8
2. yarn add react-icons@^5.0.1
3. yarn add tailwind-merge@^2.2.1
4. yarn add zustand@^4.5.0

# 3. install shadcn
- 설치법 : https://ui.shadcn.com/docs/installation/next
- https://ui.shadcn.com/docs/components/carousel 등 사용 가능

5. npx shadcn-ui@latest init

✔ Which style would you like to use? › Default
✔ Which color would you like to use as base color? › Slate
✔ Would you like to use CSS variables for colors? … no / yes

- tailwind.config.ts > content 부분에 js,ts,jsx,tsx,mdx 라고 해야지 jsx에도 tailwind css 가 적용된다.


# 4. darkmod
- https://ui.shadcn.com/docs/dark-mode/next

yarn add next-themes
- 다크모드 provider 제공
- .dark 클래스에 다크 모드 관련 색상이 정의 된다.


라이브러리 소개
Next.js 14:

Next.js는 React 기반의 웹 프레임워크로, SSR(Server-Side Rendering) 및 정적 사이트 생성을 지원
1. https://nextjs.org/
Tailwind CSS:

Tailwind CSS는 클래스 기반의 유틸리티 퍼스트(CSS Utility-First) 프레임워크
HTML 클래스에 직접 스타일을 적용하여 디자인을 구축
2. https://tailwindcss.com/docs/installation
Radix UI:

Radix UI는 저수준(UI primitives) 컴포넌트를 제공하는 라이브러리
컴포넌트를 많이 분리해두어서 커스터마이징이 거의 다 된다.
tailwind css 지원
3. https://www.radix-ui.com/primitives/docs/overview/introduction
Shadcn:

Shadcn은 그림자 및 빛 효과를 생성하기 위한 CSS 클래스 유틸리티 라이브러리
radix ui 기반 컴포넌트 라이브러리 제공 + tailwind css 지원
4. https://www.radix-ui.com/primitives/docs/overview/introduction
React-Spinners, React-Icons

React-Spinners는 리액트 애플리케이션에서 로딩 스피너
React-Icons는 다양한 아이콘
5. https://ui.shadcn.com/




# 배포


1. https://vercel.com/
![img.png](img.png)





<!-1.rem , px-->

<!-- <div class="w-4 w-[10rem] w-[20px]">1111</div> -->
<!-- 
<div class="h-64 w-64 rounded-[25px] border-8 border-black bg-pink-400">111</div> -->

<!--w , h , p , m-->

<!-- <div class="p4 mx-10 h-64 w-64 bg-pink-400 p-4 px-10 py-10">zzz</div> -->

<!--text-color,size,bold,cursor -->
<!-- <div class="h-64 w-64 cursor-pointer bg-black text-2xl text-[50px] font-[100] text-pink-400">zzz</div> -->

<!-- flex ,  -->
<!-- <div class="flex h-[750px] w-[750px] flex-col items-center justify-center gap-4 bg-pink-300">
  <div class="flex h-64 w-64 cursor-pointer items-center justify-center bg-black text-2xl text-[50px] font-[100] text-pink-400">11111</div>
  <div class="flex h-64 w-64 cursor-pointer items-center justify-center bg-black text-2xl text-[50px] font-[100] text-pink-400">2222</div>
</div> -->

<!-- hover , transition -->

<!-- <div class="flex h-[750px] w-[750px] flex-col items-center justify-center gap-4 bg-pink-300">
  <div class="flex h-64 w-64 cursor-pointer items-center justify-center bg-black text-2xl text-[50px] font-[100] text-pink-400 hover:bg-blue-400">11111</div>
  <div class="flex h-64 w-64 cursor-pointer items-center justify-center bg-black text-2xl text-[50px] font-[100] text-pink-400 transition transition hover:text-blue-400">2222</div>
</div> -->

<!--relative, absolute-->

<!-- <div class="relative h-[400px] w-[400px]">
  <img class="h-full w-full" src="https://preview.redd.it/next-static-chunks-is-damm-slow-to-load-v0-9gawstlb7a6c1.png?width=1920&format=png&auto=webp&s=48d8f8eaaff5d491c8c5fd2b1f7055cfdb421011" />
  <div class="absolute top-0 h-full w-full bg-black opacity-40"></div>
  <div class="absolute absolute top-0 h-full w-full bg-gradient-to-t from-black"></div>
</div> -->

<!-- 횡단보드 + 신호등 -->
<section class="group flex flex-row items-center justify-between bg-neutral-600">
  <div class="flex flex-row gap-3 group-hover:bg-pink-400">
    <div class="h-[150px] w-4 bg-white"></div>
    <div class="h-[150px] w-4 bg-white"></div>
    <div class="h-[150px] w-4 bg-white"></div>
    <div class="h-[150px] w-4 bg-white"></div>
    <div class="h-[150px] w-4 bg-white"></div>
  </div>
  <div class="flex justify-center gap-4">
    <div class="h-[200px] w-[200px] rounded-full border-4 border-black bg-red-500 bg-red-500 transition hover:bg-red-300"></div>
    <div class="h-[200px] w-[200px] rounded-full border-4 border-black bg-red-500 bg-yellow-500 transition hover:bg-yellow-300"></div>
    <div class="h-[200px] w-[200px] rounded-full border-4 border-black bg-green-500 bg-green-500 transition hover:bg-green-300"></div>
  </div>
  <div class="flex flex-row gap-3 group-hover:bg-blue-500">
    <div class="h-[150px] w-4 bg-white"></div>
    <div class="h-[150px] w-4 bg-white"></div>
    <div class="h-[150px] w-4 bg-white"></div>
    <div class="h-[150px] w-4 bg-white"></div>
    <div class="h-[150px] w-4 bg-white"></div>
  </div>
</section>
