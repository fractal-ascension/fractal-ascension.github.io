import{a as e,n as t}from"./clock-Cz3TK7c3.js";import{Fn as n,Ln as r,Nn as i,Rn as a,_ as o,jn as s,kn as c,zn as l}from"./vendor-asgGGjl-.js";import{t as u}from"./phaser-CTbIuaw5.js";var d=e(l(),1),f=a(),p=[`n`,`ne`,`e`,`se`,`s`,`sw`,`w`,`nw`],m={n:{x:0,y:-1},ne:{x:1,y:-1},e:{x:1,y:0},se:{x:1,y:1},s:{x:0,y:1},sw:{x:-1,y:1},w:{x:-1,y:0},nw:{x:-1,y:-1}},h=e=>e.length===2,g=(e,t,n)=>({width:e,height:t,blocked:Array.from({length:e*t},(t,r)=>n(r%e,Math.floor(r/e)))}),_=(e,{x:t,y:n})=>Number.isInteger(t)&&Number.isInteger(n)&&t>=0&&n>=0&&t<e.width&&n<e.height,v=(e,t)=>_(e,t)&&!e.blocked[t.y*e.width+t.x],y=({x:e,y:t},n)=>({x:e+m[n].x,y:t+m[n].y}),b=(e,t,n)=>{if(!v(e,y(t,n)))return!1;if(!h(n))return!0;let{x:r,y:i}=m[n];return v(e,{x:t.x+r,y:t.y})&&v(e,{x:t.x,y:t.y+i})},x=(e,t)=>{let n=Math.sign(t.x-e.x),r=Math.sign(t.y-e.y);return p.find(e=>m[e].x===n&&m[e].y===r)??`s`},ee=(e,t)=>{let n=Math.abs(e.x-t.x),r=Math.abs(e.y-t.y);return Math.max(n,r)+Math.floor(Math.min(n,r)/2)},S=(e,t)=>e.x===t.x&&e.y===t.y,te=2,ne=3,C=e=>h(e)?ne:te,w=[...p.filter(h),...p.filter(e=>!h(e))],T=(e,t)=>{let n=Array(e.width*e.height).fill(1/0);if(!v(e,t))return n;let r=({x:t,y:n})=>n*e.width+t;n[r(t)]=0;let i=[t];for(;i.length>0;){let t=0;for(let e=1;e<i.length;e++)n[r(i[e])]<n[r(i[t])]&&(t=e);let a=i.splice(t,1)[0],o=n[r(a)];for(let t of p){if(!b(e,a,t))continue;let s=y(a,t),c=o+C(t);c<n[r(s)]&&(n[r(s)]===1/0&&i.push(s),n[r(s)]=c)}}return n},E=(e,t,n)=>{if(S(t,n))return[];let r=T(e,n),i=({x:t,y:n})=>n*e.width+t;if(!_(e,t)||r[i(t)]===1/0)return null;let a=[],o=t;for(;!S(o,n);){let t=r[i(o)],n=w.find(n=>b(e,o,n)&&r[i(y(o,n))]+C(n)===t);if(!n)return null;o=y(o,n),a.push(o)}return a},re=(e,t,n)=>{if(!_(e,n))return null;let r=T(e,t);if(r[(({x:t,y:n})=>n*e.width+t)(n)]!==1/0)return n;let i=null;for(let t=0;t<e.height;t++)for(let a=0;a<e.width;a++){let o=r[t*e.width+a];if(o===1/0)continue;let s={x:a,y:t},c=ee(s,n);(!i||c<i.distance||c===i.distance&&o<i.cost)&&(i={tile:s,distance:c,cost:o})}return i?.tile??null},D=4,O=10,k=15,A=({x:e,y:t},n)=>({x:e,y:t,facing:n,step:null,path:[],pressed:null}),j=(e,t)=>Math.min(1,Math.max(0,(e.elapsed+t*D)/e.duration)),M=e=>e.step!==null||e.path.length>0||e.pressed!==null,N={ArrowUp:-1,KeyW:-1,ArrowDown:1,KeyS:1},P={ArrowLeft:-1,KeyA:-1,ArrowRight:1,KeyD:1},F=[...Object.keys(N),...Object.keys(P)],I=e=>{let t=Math.sign(e.reduce((e,t)=>e+(N[t]??0),0)),n=Math.sign(e.reduce((e,t)=>e+(P[t]??0),0));return n===0&&t===0?null:x({x:0,y:0},{x:n,y:t})},ie=e=>e.step?.to??{x:e.x,y:e.y},ae=(e,t,n)=>{let r=ie(t),i=re(e,r,n);return i?{...t,path:E(e,r,i)??[],pressed:null}:t},L=(e,t,n,r)=>{let i={x:t.x,y:t.y},a=t.pressed??(t.path.length===0?n:null);if(a){let n={...t,pressed:null,facing:a};return b(e,i,a)?{...n,step:{to:y(i,a),elapsed:r,duration:h(a)?k:O}}:{...n,step:null}}let[o,...s]=t.path;if(!o)return{...t,step:null};let c=x(i,o);return b(e,i,c)?{...t,facing:c,path:s,step:{to:o,elapsed:r,duration:h(c)?k:O}}:{...t,step:null,path:[]}},oe=(e,t,n,r)=>{let i=n.pressed?{...t,pressed:n.pressed,path:[]}:t,a=!1;for(let t=0;t<r;t++){i.step||(i=L(e,i,n.held,0));let{step:t}=i;if(!t)break;let r=t.elapsed+D;if(r<t.duration){i={...i,step:{...t,elapsed:r}};continue}a=!0,i=L(e,{...i,x:t.to.x,y:t.to.y,step:null},n.held,r-t.duration)}return{walker:i,arrived:a}},se=`{
  "type": "map",
  "version": "1.10",
  "tiledversion": "1.11.2",
  "orientation": "orthogonal",
  "renderorder": "right-down",
  "infinite": false,
  "width": 15,
  "height": 11,
  "tilewidth": 16,
  "tileheight": 16,
  "nextlayerid": 3,
  "nextobjectid": 9,
  "properties": [
    {
      "name": "startX",
      "type": "string",
      "value": "7"
    },
    {
      "name": "startY",
      "type": "string",
      "value": "7"
    },
    {
      "name": "startFacing",
      "type": "string",
      "value": "s"
    }
  ],
  "layers": [
    {
      "id": 1,
      "name": "ground",
      "type": "tilelayer",
      "x": 0,
      "y": 0,
      "width": 15,
      "height": 11,
      "opacity": 1,
      "visible": true,
      "data": [
        3,
        3,
        3,
        3,
        3,
        3,
        5,
        5,
        5,
        3,
        3,
        3,
        3,
        3,
        3,
        4,
        4,
        4,
        4,
        4,
        4,
        6,
        6,
        6,
        4,
        4,
        4,
        9,
        4,
        4,
        3,
        7,
        7,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        3,
        3,
        7,
        7,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        3,
        3,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        1,
        1,
        1,
        1,
        3,
        3,
        1,
        1,
        1,
        1,
        2,
        8,
        8,
        8,
        2,
        1,
        1,
        1,
        1,
        3,
        3,
        1,
        1,
        1,
        1,
        2,
        8,
        8,
        8,
        2,
        1,
        1,
        1,
        1,
        3,
        3,
        1,
        1,
        1,
        1,
        2,
        2,
        1,
        2,
        2,
        1,
        1,
        1,
        1,
        3,
        3,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        10,
        1,
        3,
        3,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3
      ]
    },
    {
      "id": 2,
      "name": "objects",
      "type": "objectgroup",
      "x": 0,
      "y": 0,
      "opacity": 1,
      "visible": true,
      "draworder": "topdown",
      "objects": [
        {
          "id": 1,
          "name": "The slab",
          "type": "",
          "x": 96,
          "y": 80,
          "width": 48,
          "height": 32,
          "rotation": 0,
          "visible": true,
          "properties": [
            {
              "name": "gameId",
              "type": "string",
              "value": "slab"
            },
            {
              "name": "kind",
              "type": "string",
              "value": "object"
            }
          ]
        },
        {
          "id": 2,
          "name": "The rubble pile",
          "type": "",
          "x": 96,
          "y": 16,
          "width": 48,
          "height": 16,
          "rotation": 0,
          "visible": true,
          "properties": [
            {
              "name": "gameId",
              "type": "string",
              "value": "rubble-pile"
            },
            {
              "name": "kind",
              "type": "string",
              "value": "object"
            }
          ]
        },
        {
          "id": 3,
          "name": "The stagnant water",
          "type": "",
          "x": 16,
          "y": 32,
          "width": 32,
          "height": 32,
          "rotation": 0,
          "visible": true,
          "properties": [
            {
              "name": "gameId",
              "type": "string",
              "value": "stagnant-water"
            },
            {
              "name": "kind",
              "type": "string",
              "value": "object"
            }
          ]
        },
        {
          "id": 4,
          "name": "The loose stone",
          "type": "",
          "x": 192,
          "y": 16,
          "width": 16,
          "height": 16,
          "rotation": 0,
          "visible": true,
          "properties": [
            {
              "name": "gameId",
              "type": "string",
              "value": "loose-stone"
            },
            {
              "name": "kind",
              "type": "string",
              "value": "object"
            }
          ]
        },
        {
          "id": 5,
          "name": "The floor around the slab",
          "type": "",
          "x": 80,
          "y": 64,
          "width": 80,
          "height": 64,
          "rotation": 0,
          "visible": true,
          "properties": [
            {
              "name": "gameId",
              "type": "string",
              "value": "slab-floor"
            },
            {
              "name": "kind",
              "type": "string",
              "value": "area"
            }
          ]
        },
        {
          "id": 6,
          "name": "The sturdy stick",
          "type": "",
          "x": 48,
          "y": 144,
          "width": 16,
          "height": 16,
          "rotation": 0,
          "visible": true,
          "properties": [
            {
              "name": "gameId",
              "type": "string",
              "value": "sturdyStick"
            },
            {
              "name": "kind",
              "type": "string",
              "value": "item"
            }
          ],
          "gid": 11
        },
        {
          "id": 7,
          "name": "The round rock",
          "type": "",
          "x": 176,
          "y": 64,
          "width": 16,
          "height": 16,
          "rotation": 0,
          "visible": true,
          "properties": [
            {
              "name": "gameId",
              "type": "string",
              "value": "roundRock"
            },
            {
              "name": "kind",
              "type": "string",
              "value": "item"
            }
          ],
          "gid": 12
        },
        {
          "id": 8,
          "name": "The sleeping spot's site",
          "type": "",
          "x": 192,
          "y": 128,
          "width": 16,
          "height": 16,
          "rotation": 0,
          "visible": true,
          "properties": [
            {
              "name": "gameId",
              "type": "string",
              "value": "sleepingSpot"
            },
            {
              "name": "kind",
              "type": "string",
              "value": "site"
            }
          ]
        }
      ]
    }
  ],
  "tilesets": [
    {
      "firstgid": 1,
      "name": "ruined-slab-tiles",
      "image": "ruined-slab-tiles.png",
      "imagewidth": 128,
      "imageheight": 48,
      "tilewidth": 16,
      "tileheight": 16,
      "tilecount": 24,
      "columns": 8,
      "margin": 0,
      "spacing": 0,
      "tiles": [
        {
          "id": 2,
          "properties": [
            {
              "name": "blocked",
              "type": "bool",
              "value": true
            }
          ]
        },
        {
          "id": 3,
          "properties": [
            {
              "name": "blocked",
              "type": "bool",
              "value": true
            }
          ]
        },
        {
          "id": 4,
          "properties": [
            {
              "name": "blocked",
              "type": "bool",
              "value": true
            }
          ]
        },
        {
          "id": 5,
          "properties": [
            {
              "name": "blocked",
              "type": "bool",
              "value": true
            }
          ]
        },
        {
          "id": 6,
          "properties": [
            {
              "name": "blocked",
              "type": "bool",
              "value": true
            }
          ]
        },
        {
          "id": 7,
          "properties": [
            {
              "name": "blocked",
              "type": "bool",
              "value": true
            }
          ]
        },
        {
          "id": 8,
          "properties": [
            {
              "name": "blocked",
              "type": "bool",
              "value": true
            }
          ]
        }
      ]
    }
  ]
}
`,ce=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAwCAYAAADZ9HK+AAAEc0lEQVR42u1aPWsVQRTdnxDFwkpSiAiKD6yCILFQEEGCnaRJYRfBV9gFHwmWKqazsND2lSnSa+sPsPcf+BNWJjCPu/fdz539yHPvwGF3J7MKe87ce+6dVz14+KyW8PjpS3bu7r0dcp674rn0/v7BWxbPX7xS72/emhXhytXrLtzYvr32XILZ3kG9Oz++uELAuXyPrwmHb9438O7kC3lPPSdUEsEcuVAA1FqLmLAAKILTFc9DpLnZ/UcrJELhswVWoqV1FD58/taAJAANWCDpOc9J5HJzcL6SiNYIzQKwrM0fAoqIigCQcGnn5+chBJDvuTkKr+cnDXDrJHKliIAF0BYVJNObDuA70vucQLQUQEUBPNeXAEpTgFUAlgjACSM9azv+9Lxe2/VrAsi70brzMen5fbjLLVHFEgE0YQztAagIQIV7rwASmcdnP1fgvAGGtsOTADhxNARgjQLSem8USes1wrWU4NntVIRoK4AMTH4iW8r5WgTIOx3veGgA4Txl+uAcFABpAjUBSJ4ArodRRCIem0hs7rhQzwllbAHgnS7teCpSSHnfAmsEUD2AZxdTKQAbQ87547XaLqcEwXmAIQSAPYBHANQazulzqQGvk3Y3JwC4vtJ2teQJKLFQvQGPB9AIx+jLA1jLwFIBUGGeq/mp50xoItoDNgJofQCNbHjFpR8URE4ZVJjXIgBcU1oFWImWhGI1fFwE0EiWRCFVAFQEwD6h0po1ljLQ0wH0RgCtMhiqDIREthWApQ+g9QN68QBcq9YbAbztZCwAC+F99AGoRk8bYWigTCDX4LFEBCwArg8gdgK1tq9Wx0sdP0oA8O+lEWDMPkAbAUgmEEIyfdYIkEnOjSA2AsCcbAnbJXW/JwVQ5wDUfVdVQFsv0IUApHYwZwalwyCqH8BFCtUDWKoAqsaX3L/UCMIHQVo66KsMpAThOQtoUwZazaAWAbhTwCwOiCqRMCYw0dTpn9QdHKIPQBm/vo+DvVWAFVgcVWkO9YR9ykNUMcYdpS46EflrebgiON/n+Uw6nk9oK4CzoychnMskAA9wK7gN+R/37wwigPr3Xp2wKf/uKAKAXT2toYSvXgEMSf5kBNCFB8jhHJeUuPUL57wpYCjyt7au1RL+u/epXf319IgEFSEsfQGpDLxsOz99pPn3vySsBGzU+0MLwOsBhg77IYAWAoAOHx8nc2bQkgLakL9YLOrlcrmGNJ9g+YC78x/1n/NPDaQ5KwEb9T6V1yUBaH0A7w9Kut75UxCAZCLd/z9VBXAC6KIMtAigJOxnojmEAHoQAEwB1l8VcymgNOdPQQCdvt9lI0g6/KH+hgXQheHrSgAUPARszPtDnQVQJ4tYAF24/RCA8/3S0zScAqyCKDkLiEZQz40gjwCoAyDuHh8MxWngOKNhIksFUPp7gKBjZAHEiBEjRoS0GCGAGJMsg2Ksf8BJHYfGCAHEQB9wUochMcYnAJq4EEAIIAQQKSAEMLoAJnMcGiMEECMaQTFKWqzRig0BhAA2dPwD2GmlUnLTescAAAAASUVORK5CYII=`,le=[`object`,`item`,`site`,`area`],R=536870911,z=(e,t)=>e?.find(e=>e.name===t)?.value,B=e=>{throw Error(`Not a usable Tiled map: ${e}`)},V=e=>{let t=e;(typeof t!=`object`||!t||!Array.isArray(t.layers)||!Array.isArray(t.tilesets))&&B(`no layers`),t.tilewidth!==t.tileheight&&B(`tiles are not square`);let{width:n,height:r}=t,i=new Set;for(let e of t.tilesets)for(let t of e.tiles??[])z(t.properties,`blocked`)===!0&&i.add(e.firstgid+t.id);let a=t.layers.filter(e=>e.type===`tilelayer`),o=g(n,r,(e,t)=>a.some(r=>i.has((r.data?.[t*n+e]??0)&R))),s=t.layers.find(e=>e.type===`objectgroup`&&e.name===`objects`),c=t.tilewidth,l=(s?.objects??[]).map(e=>{let t=z(e.properties,`gameId`),r=z(e.properties,`kind`);(typeof t!=`string`||t===``)&&B(`an object has no gameId`),le.includes(r)||B(`object ${String(t)} has no valid kind`);let i=e.gid?e.y-e.height:e.y,a=Math.round(e.x/c),s=Math.round(i/c),l=Math.round((e.x+e.width)/c),u=Math.round((i+e.height)/c),d=[];for(let e=s;e<u;e++)for(let t=a;t<l;t++)d.push({x:t,y:e});return{gameId:t,kind:r,tiles:r===`area`?d.filter(({x:e,y:t})=>!o.blocked[t*n+e]):d,tileIndex:e.gid?(e.gid&R)-1:null}}),u=Number(z(t.properties,`startX`)),d=Number(z(t.properties,`startY`)),f=z(t.properties,`startFacing`);return(!Number.isInteger(u)||!Number.isInteger(d))&&B(`no start tile`),p.includes(f)||B(`no start facing`),{width:n,height:r,tileSize:c,grid:o,objects:l,start:{x:u,y:d},startFacing:f}},H=`ruined-slab`,U=JSON.parse(se),W=V(U),ue=ce,G=W,K=e=>({walker:e,keys:[],stored:0}),q=s({name:`world`,initialState:K(A(G.start,G.startFacing)),reducers:{clickTile(e,t){e.walker=ae(G.grid,e.walker,t.payload)},keyDown(e,t){if(!F.includes(t.payload)||e.keys.includes(t.payload))return;e.keys.push(t.payload);let n=I(e.keys);n&&(e.walker={...e.walker,pressed:n,path:[]})},keyUp(e,t){e.keys=e.keys.filter(e=>e!==t.payload)},releaseKeys(e){e.keys=[]},tick(e,t){let{walker:n,arrived:r}=oe(G.grid,e.walker,{pressed:null,held:I(e.keys)},t.payload);e.walker=n,r&&(e.stored+=1)},startOver(e){e.walker=A(G.start,G.startFacing),e.stored+=1}}}),{clickTile:de,keyDown:fe,keyUp:pe,releaseKeys:me,tick:he,startOver:ge}=q.actions,_e=q.reducer,ve=`fractal-ascension:world-prototype`,J=1,ye=(e,t)=>{let n=A(e.start,e.startFacing),r;try{r=JSON.parse(localStorage.getItem(`fractal-ascension:world-prototype`)??`null`)}catch{return n}let i=r;if(!i||i.version!==J||i.map!==t)return n;let{x:a,y:o,facing:s}=i;return typeof a!=`number`||typeof o!=`number`||!p.includes(s)||!v(e.grid,{x:a,y:o})?n:A({x:a,y:o},s)},be=(e,t)=>{let n={version:J,map:t,x:e.x,y:e.y,facing:e.facing};try{localStorage.setItem(ve,JSON.stringify(n))}catch{}},xe=()=>{let e=c({reducer:{world:_e},preloadedState:{world:K(ye(W,H))}}),t=e.getState().world.stored;return e.subscribe(()=>{let{world:n}=e.getState();n.stored!==t&&(t=n.stored,be(n.walker,H))}),e},Se=()=>{let e=r(),n=(0,d.useRef)(0);return(0,d.useEffect)(()=>{let r=0,i=performance.now(),a=o=>{let{world:s}=e.getState();if(M(s.walker)||I(s.keys)!==null){let r=t(n.current,(o-i)/1e3);n.current=r.carry,r.steps>0&&e.dispatch(he(r.steps))}else n.current=0;i=o,r=requestAnimationFrame(a)};return r=requestAnimationFrame(a),()=>cancelAnimationFrame(r)},[e]),n},Y=`ruined-slab-tiles`,X=`ruined-slab`,Z=12,Ce=class extends u.Scene{store;stepFraction;player;reducedMotion=!1;constructor(e,t){super(`world`),this.store=e,this.stepFraction=t}preload(){this.load.image(Y,ue),this.load.tilemapTiledJSON(X,U)}frame(e){let t=`tile-${e}`,n=this.textures.get(Y);if(!n.has(t)){let r=W.tileSize,i=Math.floor(n.getSourceImage().width/r);n.add(t,0,e%i*r,Math.floor(e/i)*r,r,r)}return t}create(){let e=W.tileSize,t=this.make.tilemap({key:X}),n=t.addTilesetImage(Y,Y);n&&t.createLayer(`ground`,n,0,0);for(let t of W.objects)if(t.tileIndex!==null)for(let{x:n,y:r}of t.tiles)this.add.image(n*e,r*e,Y,this.frame(t.tileIndex)).setOrigin(0);this.player=this.add.image(0,0,Y,this.frame(Z)).setOrigin(0),this.cameras.main.setZoom(3).setRoundPixels(!0),this.reducedMotion=window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches??!1,this.input.on(`pointerdown`,t=>{if(t.button!==0)return;let n=this.cameras.main.getWorldPoint(t.x,t.y);this.store.dispatch(de({x:Math.floor(n.x/e),y:Math.floor(n.y/e)}))}),this.update()}update(){if(!this.player)return;let e=W.tileSize,{walker:t}=this.store.getState().world,n=t.x,r=t.y;if(t.step&&!this.reducedMotion){let e=j(t.step,this.stepFraction());n+=(t.step.to.x-t.x)*e,r+=(t.step.to.y-t.y)*e}this.player.setPosition(n*e,r*e).setFrame(this.frame(Z+p.indexOf(t.facing)));let i=this.cameras.main,a=(e,t,n)=>t<=n?t/2:Math.min(Math.max(e,n/2),t-n/2);i.centerOn(a(n*e+e/2,W.width*e,i.width/i.zoom),a(r*e+e/2,W.height*e,i.height/i.zoom))}},Q=o(),$=({stepFraction:e})=>{let t=r(),n=(0,d.useRef)(null);return(0,d.useEffect)(()=>{if(!n.current)return;let r=new u.Game({type:u.AUTO,parent:n.current,backgroundColor:`#111218`,pixelArt:!0,roundPixels:!0,banner:!1,audio:{noAudio:!0},input:{keyboard:!1},loader:{imageLoadType:`HTMLImageElement`},scale:{mode:u.Scale.RESIZE,width:n.current.clientWidth,height:n.current.clientHeight},scene:new Ce(t,()=>e.current??0)});return()=>r.destroy(!0)},[t,e]),(0,Q.jsx)(`div`,{className:`world-view`,ref:n})},we=`A preview of the world: the Ruined Slab chamber in placeholder tiles. Click the floor to walk there, or use the arrow keys or W A S D (hold to keep walking; two keys at once for a diagonal). Nothing here touches your saved game.`,Te=()=>{let{pathname:e,search:t,hash:n}=window.location,r=t.slice(1).split(`&`).filter(e=>e!==``&&decodeURIComponent(e.split(`=`)[0])!==`world`);return`${e}${r.length>0?`?${r.join(`&`)}`:``}${n}`},Ee=e=>e instanceof HTMLElement&&(e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName)),De=()=>{let e=n(),t=Se();return(0,d.useEffect)(()=>{let t=t=>{!F.includes(t.code)||t.altKey||t.ctrlKey||t.metaKey||Ee(t.target)||(t.preventDefault(),t.repeat||e(fe(t.code)))},n=t=>{F.includes(t.code)&&e(pe(t.code))},r=()=>e(me());return window.addEventListener(`keydown`,t),window.addEventListener(`keyup`,n),window.addEventListener(`blur`,r),()=>{window.removeEventListener(`keydown`,t),window.removeEventListener(`keyup`,n),window.removeEventListener(`blur`,r)}},[e]),(0,Q.jsxs)(`div`,{className:`world-page`,children:[(0,Q.jsxs)(`header`,{className:`world-bar`,children:[(0,Q.jsx)(`h1`,{className:`world-bar__title`,children:`World prototype`}),(0,Q.jsx)(`p`,{className:`world-bar__help`,children:we}),(0,Q.jsx)(`button`,{type:`button`,className:`btn`,onClick:()=>e(ge()),children:`Start over`}),(0,Q.jsx)(`a`,{className:`btn`,href:Te(),children:`Back to the game`})]}),(0,Q.jsx)($,{stepFraction:t})]})},Oe=e=>{(0,f.createRoot)(e).render((0,Q.jsx)(d.StrictMode,{children:(0,Q.jsx)(i,{store:xe(),children:(0,Q.jsx)(De,{})})}))};export{Oe as startWorld};