# Catatan

tutorial ini belajar gimana cara menggunakan React Hooks.

react hooks berguna agar kita bisa membuat stateful component dengan fungsi

sehingga terdapat bebarapa fitur yang ditambahkan yaitu:

## UseState

sebuah fitur berupa fungsi yang menerima paramater berupa default state, fungsi ini akan mengembalikan nilai array, dimana indexPertama adalah state, indexKedua adalah setState untuk mengubah state tersebut.

UseState digunakan untuk memanajemen state pada fungsi komponent

## useEffects

Digunakan untuk menggantikan life cycle pada komponent (seperti componentDidMount, dlll), sehingga fungsi ini akan mengawasi juga props apa yang akan berubah, dan melakukan rerender atau render ulang komponent tersebut dengan mengembalikan fungsi.

fungsi useEffect akan menerima dua argument, paramater pertama adalah sebuah fungsi yang akan dipanggil setiap dilakukan rerender, paramater kedua adalah props yang akan diawasi ketika terjadi perbuahan.

## useReducer

Digunakan seperti reducer dimana memisahkan global state pada component
