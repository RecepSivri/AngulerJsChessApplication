function queenMarkArea(x,y,stack,table)
{
    var point = {X:x, Y:y};
    stack.push(point);
    table[y][x].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
    var i=x-1;
    var j=y-1;
    while(i>=0&&j>=0&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)==='e')
    {
        table[j][i].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
        --i;
        --j;
    }
    if(i>=0&&j>=0&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w'&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='e')
        table[j][i].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
    var i=x+1;
    var j=y-1;
    while(i<8&&j>=0&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)==='e')
    {
        table[j][i].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
        ++i;
        --j;
    }
    if(i<8&&j>=0&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w'&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='e')
        table[j][i].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
    var i=x-1;
    var j=y+1;
    while(i>=0&&j<8&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)==='e')
    {
        table[j][i].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
        --i;
        ++j;
    }
    if(i>=0&&j<8&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w'&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='e')
        table[j][i].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
    var i=x+1;
    var j=y+1;
    while(i<8&&j<8&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)==='e')
    {
        table[j][i].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
        ++i;
        ++j;
    }
    if(i<8&&j<8&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w'&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='e')
        table[j][i].style="height:75px;width:75px;border-color:blue;borderwidth:6px";





    var k=y-1;
    while(k>=0&&table[k][x].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)==='e')
    {
        table[k][x].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
        --k;
    }
    if(k>=0&&table[k][x].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='e'&&table[k][x].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
        table[k][x].style="height:75px;width:75px;border-color:blue;borderwidth:6px";

    var l=x-1;
    while(l>=0&&table[y][l].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)==='e')
    {
        table[y][l].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
        --l;
    }
    if(l>=0&&table[y][l].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='e'&&table[y][l].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
        table[y][l].style="height:75px;width:75px;border-color:blue;borderwidth:6px";

    var j=x+1;
    while(j<8&&table[y][j].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)==='e')
    {
        table[y][j].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
        ++j;
    }
    if(j<8&&table[y][j].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='e'&&table[y][j].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
        table[y][j].style="height:75px;width:75px;border-color:blue;borderwidth:6px";

    var i=y+1;
    while(i<8&&table[i][x].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)==='e')
    {
        table[i][x].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
        ++i;
    }
    if(i<7&&table[i][x].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='e'&&table[i][x].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
        table[i][x].style="height:75px;width:75px;border-color:blue;borderwidth:6px";


}
function queenMove(stack,table)
{
    var currCoor=stack.pop();
    var oldCoor=stack.pop();

    if(currCoor.X===oldCoor.X)
    {
        if(currCoor.Y<oldCoor.Y)
        {
            var i=currCoor.Y+1;
            while(i<oldCoor.Y&&table[i][currCoor.X].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)==='e')
                ++i;
            if(i===oldCoor.Y)
            {
                if(oldCoor.Y&&table[currCoor.Y][currCoor.X].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
                {
                    table[currCoor.Y][currCoor.X].innerHTML='<img src="img//wqueen.png" style="height:35px;width:35px"/>';
                    table[oldCoor.Y][oldCoor.X].innerHTML='<img src="img//empty.png" style="height:35px;width:35px"/>';
                }
            }
        }
        if(currCoor.Y>oldCoor.Y)
        {
            var i=oldCoor.Y+1;
            while(i<currCoor.Y&&table[i][currCoor.X].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)==='e')
                ++i;
            if(i===currCoor.Y)
            {
                if(currCoor.Y&&table[currCoor.Y][currCoor.X].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
                {
                    table[currCoor.Y][currCoor.X].innerHTML='<img src="img//wqueen.png" style="height:35px;width:35px"/>';
                    table[oldCoor.Y][oldCoor.X].innerHTML='<img src="img//empty.png" style="height:35px;width:35px"/>';
                }
            }
        }
    }

    if(currCoor.Y===oldCoor.Y)
    {
        if(currCoor.X<oldCoor.X)
        {
            var i=currCoor.X+1;
            while(i<oldCoor.X&&table[currCoor.Y][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)==='e')
                ++i;
            if(i===oldCoor.X)
            {
                if(oldCoor.X&&table[currCoor.Y][currCoor.X].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
                {
                    table[currCoor.Y][currCoor.X].innerHTML='<img src="img//wqueen.png" style="height:35px;width:35px"/>';
                    table[oldCoor.Y][oldCoor.X].innerHTML='<img src="img//empty.png" style="height:35px;width:35px"/>';
                }
            }
        }
        if(currCoor.X>oldCoor.X)
        {
            var i=oldCoor.X+1;
            while(i<currCoor.X&&table[currCoor.Y][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)==='e')
                ++i;
            if(i===currCoor.X)
            {
                if(currCoor.X&&table[currCoor.Y][currCoor.X].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
                {
                    table[currCoor.Y][currCoor.X].innerHTML='<img src="img//wqueen.png" style="height:35px;width:35px"/>';
                    table[oldCoor.Y][oldCoor.X].innerHTML='<img src="img//empty.png" style="height:35px;width:35px"/>';
                }
            }
        }
    }
    var x1 = currCoor.X;
    var y1 = currCoor.Y;

    var x2 = oldCoor.X;
    var y2 = oldCoor.Y;


    var i;
    var j
    if(x1<x2 && y1<y2)
    {
        i=x1+1;
        j=y1+1;
        while(i<x2&&j<y2&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)==='e')
        {
            ++j;
            ++i;
        }
        if(i==x2&&j==y2)
        {

            table[currCoor.Y][currCoor.X].innerHTML='<img src="img//wqueen.png" style="height:35px;width:35px"/>';
            table[oldCoor.Y][oldCoor.X].innerHTML='<img src="img//empty.png" style="height:35px;width:35px"/>';
        }
    }

    if(x1>x2 && y1>y2)
    {
        i=x1-1;
        j=y1-1;
        while(i>x2&&j>y2&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)==='e')
        {
            --j;
            --i;
        }
        if(i==x2&&j==y2)
        {

            table[currCoor.Y][currCoor.X].innerHTML='<img src="img//wqueen.png" style="height:35px;width:35px"/>';
            table[oldCoor.Y][oldCoor.X].innerHTML='<img src="img//empty.png" style="height:35px;width:35px"/>';
        }
    }
    if(x1<x2 && y1>y2)
    {
        i=x1+1;
        j=y1-1;
        while(i<x2&&j>y2&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)==='e')
        {
            --j;
            ++i;
        }
        if(i==x2&&j==y2)
        {

            table[currCoor.Y][currCoor.X].innerHTML='<img src="img//wqueen.png" style="height:35px;width:35px"/>';
            table[oldCoor.Y][oldCoor.X].innerHTML='<img src="img//empty.png" style="height:35px;width:35px"/>';
        }
    }
    if(x1>x2 && y1<y2)
    {
        i=x1-1;
        j=y1+1;
        while(i>x2&&j<y2&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)==='e')
        {
            ++j;
            --i;
        }
        if(i==x2&&j==y2)
        {

            table[currCoor.Y][currCoor.X].innerHTML='<img src="img//wqueen.png" style="height:35px;width:35px"/>';
            table[oldCoor.Y][oldCoor.X].innerHTML='<img src="img//empty.png" style="height:35px;width:35px"/>';
        }
    }

}