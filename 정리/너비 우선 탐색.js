// BFS Breadth FOrst Search 너비우선 탐색 - Queue
// 가까운 정점을 먼저 방문, 먼 정점은 나중에 방문

// Queue -> first in first out

//         E
//     D1       A2
// F3       C4     B5

// queue E
// current
// 방문경로

// queue
// current E
// 방문경로

// queue D A
// current
// 방문경로 E

// queue A F
// current D
// 방문경로 E

// queue F
// current A
// 방문경로 E D

// queue F C B
// current
// 방문경로 E D A

// queue C B
// current F
// 방문경로 E D A

// queue C B
// current
// 방문경로 E D A F
