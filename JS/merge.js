function processData(input) {

    var arr = input.split("\n");
    var [n, queries] = arr[0].split(" ");
    var uf = new UF();
    for (var i = 1; i <= n; i++) {
        uf.add(i);
    }
    var result = "";
    for (var i = 1; i < arr.length; i++) {
        var list = arr[i].split(" ");
        if (list[0] === "Q") {
            
            if (result !== "") {
                result += "\n";
            }
            
            result += uf.count[uf.find(list[1])];
        } else {
            uf.union(list[1], list[2]);
        }
    }
    console.log(result);
} 

function UF() {
    this.parent = [];
    this.count = [];
}

UF.prototype.add = function(i) {
    this.parent[i] = i;
    this.count[i] = 1;
}

UF.prototype.find = function(i) {
    var j = i;
    while (this.parent[i] !== i) {
        i = this.parent[i];
    }
    while (j !== i) {
        var pj = this.parent[j];
        this.parent[j] = i;
        j = pj;
    }
    return i;
}

UF.prototype.union = function (i, j) {
    var pi = this.find(i);
    var pj = this.find(j);
    if (pi !== pj) {
        this.parent[pj] = pi;
        this.count[pi] += this.count[pj]; 
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
