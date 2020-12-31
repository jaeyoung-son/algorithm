// Depth First Search DFS - stacl
// 현재 정점에서 한 방향으로 가면서 검사하고 막힌 정점은 포기하고
// 마지막에 따라온 간선으로 되돌아 간다
//         A
//     B1       C3
// D2       E4     F5

//         E
//     D1       A3
// F2       C4     B5

// Stack -> first in last out

// stack E
// current
// 방문경로

// stack
// current E
// 방문경로

// stack A D
// current
// 방문경로 E

// stack A
// current D
// 방문경로

// stack A F
// current
// 방문경로 E D

// stack A
// current F
// 방문경로 E D

// stack A
// current
// 방문경로 E D F

// stack B C
// current A
// 방문경로 E D F

// ...
