// problems.js
// This file defines the data model used across the FabiHelp application.
// It contains an array of problems along with metadata such as code, title,
// category, difficulty and grade.  Categories are grouped by grade for
// convenience when building the problems listing page.

// We intentionally avoid TypeScript types in this file.  Instead, plain
// JavaScript objects are exported.  See the original dataset in the
// `fabiihelp - Copy` project for inspiration.

export const categories = {
    9: [
        {id: "algoritmi", name: "Algoritmi Elementari", icon: "🔢"},
        {id: "tablouri", name: "Tablouri", icon: "📊"},
        {id: "siruri", name: "Șiruri de Caractere", icon: "📝"},
        {id: "recursivitate", name: "Recursivitate", icon: "🔄"},
        {id: "matrici", name: "Matrici", icon: "🔲"},
    ],
    10: [
        {id: "subprograme", name: "Subprograme", icon: "⚙️"},
        {id: "fisiere", name: "Fișiere Text", icon: "📁"},
        {id: "structuri", name: "Structuri", icon: "🏗️"},
        {id: "sortare", name: "Algoritmi de Sortare", icon: "📈"},
        {id: "cautare", name: "Algoritmi de Căutare", icon: "🔍"},
    ],
    11: [
        {id: "grafuri", name: "Grafuri", icon: "🕸️"},
        {id: "arbori", name: "Arbori", icon: "🌲"},
        {id: "oop", name: "Programare OOP", icon: "🎯"},
        {id: "backtracking", name: "Backtracking", icon: "🔙"},
        {id: "dinamica", name: "Programare Dinamică", icon: "📐"},
    ],
};

// Each problem in this list represents a programming exercise.  The `id`
// field must be unique across all problems.  The `code` field encodes the
// grade (IX, X, XI) followed by a running number.  The `difficulty` field
// accepts one of: 'easy', 'medium' or 'hard'.  If a solution is provided
// then a `solution` string will be present; otherwise it can be omitted.
export const problems = [
    // Clasa IX
    {
        id: "1",
        code: "IX001",
        title: "Suma cifrelor unui număr",
        category: "algoritmi",
        difficulty: "easy",
        grade: 9,
        description:
            "Se citește un număr natural n. Să se calculeze și să se afișeze suma cifrelor numărului.",
        solution: `#include <iostream>
using namespace std;

int main() {
    int n, suma = 0;
    cin >> n;
    
    while (n > 0) {
        suma += n % 10;
        n /= 10;
    }
    
    cout << suma;
    return 0;
}

// Complexitate: O(log n)`,
    },
    {
        id: "2",
        code: "IX002",
        title: "Verificare număr prim",
        category: "algoritmi",
        difficulty: "easy",
        grade: 9,
        description:
            "Se citește un număr natural n. Să se verifice dacă numărul este prim.",
        solution: `#include <iostream>
using namespace std;

bool estePrim(int n) {
    if (n < 2) return false;
    if (n == 2) return true;
    if (n % 2 == 0) return false;
    
    for (int d = 3; d * d <= n; d += 2) {
        if (n % d == 0) return false;
    }
    return true;
}

int main() {
    int n;
    cin >> n;
    cout << (estePrim(n) ? "DA" : "NU");
    return 0;
}`,
    },
    {
        id: "3",
        code: "IX003",
        title: "CMMDC - Algoritmul lui Euclid",
        category: "algoritmi",
        difficulty: "easy",
        grade: 9,
        description:
            "Se citesc două numere naturale a și b. Să se calculeze cel mai mare divizor comun.",
        solution: `#include <iostream>
using namespace std;

int cmmdc(int a, int b) {
    while (b != 0) {
        int r = a % b;
        a = b;
        b = r;
    }
    return a;
}

int main() {
    int a, b;
    cin >> a >> b;
    cout << cmmdc(a, b);
    return 0;
}`,
    },
    {
        id: "4",
        code: "IX004",
        title: "Elementul maxim dintr-un tablou",
        category: "tablouri",
        difficulty: "easy",
        grade: 9,
        description: "Se citește un tablou de n numere întregi. Să se determine elementul maxim.",
    },
    {
        id: "5",
        code: "IX005",
        title: "Numărul de vocale",
        category: "siruri",
        difficulty: "easy",
        grade: 9,
        description: "Se citește un șir de caractere. Să se numere câte vocale conține.",
    },
    {
        id: "6",
        code: "IX006",
        title: "Factorial recursiv",
        category: "recursivitate",
        difficulty: "medium",
        grade: 9,
        description: "Implementați calculul factorialului folosind recursivitate.",
    },
    {
        id: "7",
        code: "IX007",
        title: "Suma elementelor de pe diagonala principală",
        category: "matrici",
        difficulty: "medium",
        grade: 9,
        description:
            "Pentru o matrice pătratică, calculați suma elementelor de pe diagonala principală.",
    },
    {
        id: "8",
        code: "IX008",
        title: "Palindrom",
        category: "siruri",
        difficulty: "medium",
        grade: 9,
        description: "Verificați dacă un șir de caractere este palindrom.",
    },

    // Clasa X
    {
        id: "9",
        code: "X001",
        title: "Funcție pentru aria cercului",
        category: "subprograme",
        difficulty: "easy",
        grade: 10,
        description: "Creați o funcție care calculează aria unui cerc dat raza.",
    },
    {
        id: "10",
        code: "X002",
        title: "Citire din fișier text",
        category: "fisiere",
        difficulty: "easy",
        grade: 10,
        description: "Citiți numere dintr-un fișier text și afișați suma lor.",
    },
    {
        id: "11",
        code: "X003",
        title: "Structură Student",
        category: "structuri",
        difficulty: "medium",
        grade: 10,
        description:
            "Definiți o structură pentru student cu nume, vârstă și medie.",
    },
    {
        id: "12",
        code: "X004",
        title: "Bubble Sort",
        category: "sortare",
        difficulty: "medium",
        grade: 10,
        description:
            "Implementați algoritmul Bubble Sort pentru sortarea unui vector.",
        solution: `#include <iostream>
using namespace std;

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}

int main() {
    int n;
    cin >> n;
    int arr[100];
    
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    bubbleSort(arr, n);
    
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    
    return 0;
}

// Complexitate: O(n²)`,
    },
    {
        id: "13",
        code: "X005",
        title: "Căutare binară",
        category: "cautare",
        difficulty: "medium",
        grade: 10,
        description: "Implementați algoritmul de căutare binară.",
        solution: `#include <iostream>
using namespace std;

int cautareBinara(int arr[], int n, int x) {
    int st = 0, dr = n - 1;
    
    while (st <= dr) {
        int mid = (st + dr) / 2;
        
        if (arr[mid] == x) return mid;
        if (arr[mid] < x) st = mid + 1;
        else dr = mid - 1;
    }
    
    return -1;
}

int main() {
    int n, x;
    cin >> n;
    int arr[100];
    
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    cin >> x;
    int poz = cautareBinara(arr, n, x);
    
    if (poz != -1) cout << "Gasit la pozitia " << poz;
    else cout << "Nu a fost gasit";
    
    return 0;
}

// Complexitate: O(log n)`,
    },
    {
        id: "14",
        code: "X006",
        title: "Quick Sort",
        category: "sortare",
        difficulty: "hard",
        grade: 10,
        description: "Implementați algoritmul Quick Sort.",
    },
    {
        id: "15",
        code: "X007",
        title: "Merge Sort",
        category: "sortare",
        difficulty: "hard",
        grade: 10,
        description: "Implementați algoritmul Merge Sort.",
    },

    // Clasa XI
    {
        id: "16",
        code: "XI001",
        title: "Parcurgere BFS",
        category: "grafuri",
        difficulty: "medium",
        grade: 11,
        description: "Implementați parcurgerea în lățime (BFS) a unui graf.",
        solution: `#include <iostream>
#include <queue>
#include <vector>
using namespace std;

vector<int> adj[100];
bool vizitat[100];

void BFS(int start) {
    queue<int> q;
    q.push(start);
    vizitat[start] = true;
    
    while (!q.empty()) {
        int nod = q.front();
        q.pop();
        cout << nod << " ";
        
        for (int vecin : adj[nod]) {
            if (!vizitat[vecin]) {
                vizitat[vecin] = true;
                q.push(vecin);
            }
        }
    }
}

int main() {
    int n, m;
    cin >> n >> m;
    
    for (int i = 0; i < m; i++) {
        int x, y;
        cin >> x >> y;
        adj[x].push_back(y);
        adj[y].push_back(x);
    }
    
    BFS(1);
    return 0;
}`,
    },
    {
        id: "17",
        code: "XI002",
        title: "Parcurgere DFS",
        category: "grafuri",
        difficulty: "medium",
        grade: 11,
        description: "Implementați parcurgerea în adâncime (DFS) a unui graf.",
    },
    {
        id: "18",
        code: "XI003",
        title: "Clasă pentru Fracții",
        category: "oop",
        difficulty: "medium",
        grade: 11,
        description: "Creați o clasă pentru lucrul cu fracții, cu operații de bază.",
    },
    {
        id: "19",
        code: "XI004",
        title: "Generare permutări",
        category: "backtracking",
        difficulty: "hard",
        grade: 11,
        description: "Generați toate permutările unei mulțimi folosind backtracking.",
    },
    {
        id: "20",
        code: "XI005",
        title: "Problema rucsacului",
        category: "dinamica",
        difficulty: "hard",
        grade: 11,
        description: "Rezolvați problema rucsacului folosind programare dinamică.",
    },
    {
        id: "21",
        code: "XI006",
        title: "Arbore binar de căutare",
        category: "arbori",
        difficulty: "hard",
        grade: 11,
        description: "Implementați operații de bază pe un arbore binar de căutare.",
    },
    {
        id: "22",
        code: "XI007",
        title: "Algoritmul lui Dijkstra",
        category: "grafuri",
        difficulty: "hard",
        grade: 11,
        description: "Implementați algoritmul lui Dijkstra pentru grafuri cu costuri pozitive.",
    },
];