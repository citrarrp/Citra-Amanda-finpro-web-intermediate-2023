==========================================================================
||                                                                      ||
||     FINAL PROJECT STUDY CLUB KSM ANDROID KELAS WEB INTERMEDIETE      ||
||                                                                      ||
||       CITRA RAHMAWATI RATU PERTIWI  &  AMANDA DEVIA KURNIAWAN        ||
||                                                                      ||
==========================================================================



**FINDINGMOVIE**


Website ini dibuat dalam rangka memenuhi tugas final project Study Club KSM Android kelas Web Intermediate.

**CAKUPAN MATERI**

#App directory dan routing (statis dan dinamis) : Routing statis pada navbar di layout.tsx untuk ke bagian home, popular, upcoming, dan top-rated. Routing dinamis pada movieList yang merupakan detail deskripsi sebuah film berdasarkan id film. 

#Environment variable, Next.js configuration, dan JS/TS configuration : 
- Environment variable ** menggunakan lokal env untuk menyimpan key API, URL website TMDb API, dan URL path gambar. 
- Next.js configuration dengan mengatur protocol, hostname agar dapat mengakses gambar dari TMdB API. 
- TS Configuration membuat alias path untuk memudahkan dalam mengakses folder component dan app.

#Tailwind CSS, custom font pada Next.js, dan responsive web design : 
- Tailwind CSS digunakan di semua halaman yang ditampilkan, pada tailwind.config.ts mengatur custom warna tambahan untuk background, font, border dan custom ketebalan huruf. 
- Custom font yang digunakan adalah Poppins yang ada di layout.tsx dan Nova_Square pada component cover.tsx. 
- Responsive web design sudah di semua halaman yang ditampilkan menggunakan tailwind CSS dengan menggunakan kelas responsive sm:, md:, dan lg:.

#Next Image
Semua gambar pada website sudah menggunakan komponen Image dari nextjs

#React Context dan components (client dan server)
- React Context digunakan untuk mengatur tampilan tema dark light. 
- Components client di layout, navbar, page untuk mengakses nilai dari theme context

#SSG, ISR, dan SSR
- SSG pada routing /, /movieList, /popular, dan /toprated yang statis. Rute-rute ini dipra-render sebagai konten statis selama proses deploy.
- SSR pada routing ke /movieList/[movieId], /popular/[popularMovieId], dan /ke/toprated/[movieTopratedId] berupa rute dinamis, yang akan dirender di server sesuai permintaan.
 
#Metadata (statis dan dinamis), custom error dan loading page, dan error serta loading layout
Metadata statis pada layout.tsx, dan dinamis menggunakan komponen Metadata dengan memasukkan kata kunci film yang dinamis seperti tittle, overview, keyword berupa genre. 

#Refactoring Components 
Pada komponen MovieList, dilakukan pemisahan desain daftar film ke dalam komponen terpisah yaitu MovieCard. Sehingga dapat menggunakan MovieCard di berbagai bagian dan hanya perlu merender ulang MovieCard dengan data yang berbeda di berbagai bagian halaman.

#Deploying proyek Next.js pada Vercel dan SEO checking

