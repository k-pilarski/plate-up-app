import './style.css'

const app = document.getElementById('app');

const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

const faviconLink = document.createElement('link');
faviconLink.href = "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍳</text></svg>";
faviconLink.rel = 'icon';
document.head.appendChild(faviconLink);

document.body.className = "bg-slate-50 font-['Inter'] antialiased text-slate-800";

function createLayout() {
    app.innerHTML = `
        <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <div class="w-10 h-10 bg-brand rounded-xl flex items-center justify-center shadow-lg shadow-brand/20">
                        <span class="text-white text-2xl">🍳</span>
                    </div>
                    <h1 class="text-xl font-bold tracking-tight text-slate-900">Plate<span class="text-brand">Up</span></h1>
                </div>
            </div>
        </nav>

        <header class="py-12 px-4 max-w-7xl mx-auto text-center">
            <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Your next favorite meal starts here
            </h2>
            <p class="text-slate-500 text-lg max-w-2xl mx-auto mb-8">
                Search through thousands of delicious dishes, filter by ingredients and cook like a pro.
            </p>

            <div class="max-w-2xl mx-auto relative group">
                <div class="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                    <span class="text-xl">🔍</span>
                </div>
                <input type="text" 
                       placeholder="Type an ingredient or dish name..." 
                       class="w-full pl-14 pr-32 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand transition-all text-lg overflow-hidden">
                <button class="absolute right-2 top-2 bottom-2 bg-brand text-white px-6 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                    Search
                </button>
            </div>
        </header>

        <div class="max-w-7xl mx-auto px-4 mb-10 overflow-x-auto no-scrollbar">
            <div class="flex justify-center items-center gap-3 py-2">
                <button class="px-5 py-2 bg-white border border-slate-200 hover:border-brand hover:bg-slate-50 hover:-translate-y-0.5 hover:shadow-md rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200">🥦 Vegetarian</button>
                <button class="px-5 py-2 bg-white border border-slate-200 hover:border-brand hover:bg-slate-50 hover:-translate-y-0.5 hover:shadow-md rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200">⚡ Quick (under 30 min)</button>
                <button class="px-5 py-2 bg-white border border-slate-200 hover:border-brand hover:bg-slate-50 hover:-translate-y-0.5 hover:shadow-md rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200">🍗 High Protein</button>
                <button class="px-5 py-2 bg-white border border-slate-200 hover:border-brand hover:bg-slate-50 hover:-translate-y-0.5 hover:shadow-md rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200">🍰 Desserts</button>
            </div>
        </div>

        <main class="max-w-7xl mx-auto px-4 pb-20">
            <div id="recipes-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                ${Array(8).fill(0).map(() => createSkeletonCard()).join('')}
            </div>
        </main>
    `;
}

function createSkeletonCard() {
    return `
        <div class="group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div class="relative h-56 bg-slate-200 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                   <span class="text-white text-sm font-medium cursor-pointer">View Recipe →</span>
                </div>
                <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=500" class="w-full h-full object-cover">
            </div>
            <div class="p-5">
                <div class="flex items-center gap-2 mb-2">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-brand bg-brand/10 px-2 py-0.5 rounded">Breakfast</span>
                    <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">⏱ 20 min</span>
                </div>
                <h3 class="font-bold text-slate-900 text-lg leading-snug group-hover:text-brand transition-colors">Fluffy Pancakes with Fresh Berries</h3>
                <div class="mt-4 flex items-center justify-between text-sm text-slate-500">
                    <span class="flex items-center gap-1">⭐ 4.8</span>
                    <span class="flex items-center gap-1">🔥 320 kcal</span>
                </div>
            </div>
        </div>
    `;
}

createLayout();