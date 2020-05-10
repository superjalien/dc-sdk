define(["./when-b43ff45e","./Check-d404a0fe","./Math-336da716","./Cartesian2-3c21ddb9","./Transforms-ffcbad88","./RuntimeError-bf10f3d5","./WebGLConstants-56de22c0","./ComponentDatatype-8956ad9a","./GeometryAttribute-c9800e88","./GeometryAttributes-fbf888b4","./IndexDatatype-c5295474","./GeometryOffsetAttribute-9f7392ac","./CylinderGeometryLibrary-e4433c22"],function(h,t,e,v,A,i,r,R,G,O,V,C,L){"use strict";var g=new v.Cartesian2;function f(t){var e=(t=h.defaultValue(t,h.defaultValue.EMPTY_OBJECT)).length,i=t.topRadius,r=t.bottomRadius,a=h.defaultValue(t.slices,128),n=Math.max(h.defaultValue(t.numberOfVerticalLines,16),0);this._length=e,this._topRadius=i,this._bottomRadius=r,this._slices=a,this._numberOfVerticalLines=n,this._offsetAttribute=t.offsetAttribute,this._workerName="createCylinderOutlineGeometry"}f.packedLength=6,f.pack=function(t,e,i){return i=h.defaultValue(i,0),e[i++]=t._length,e[i++]=t._topRadius,e[i++]=t._bottomRadius,e[i++]=t._slices,e[i++]=t._numberOfVerticalLines,e[i]=h.defaultValue(t._offsetAttribute,-1),e};var d={length:void 0,topRadius:void 0,bottomRadius:void 0,slices:void 0,numberOfVerticalLines:void 0,offsetAttribute:void 0};return f.unpack=function(t,e,i){e=h.defaultValue(e,0);var r=t[e++],a=t[e++],n=t[e++],o=t[e++],u=t[e++],s=t[e];return h.defined(i)?(i._length=r,i._topRadius=a,i._bottomRadius=n,i._slices=o,i._numberOfVerticalLines=u,i._offsetAttribute=-1===s?void 0:s,i):(d.length=r,d.topRadius=a,d.bottomRadius=n,d.slices=o,d.numberOfVerticalLines=u,d.offsetAttribute=-1===s?void 0:s,new f(d))},f.createGeometry=function(t){var e=t._length,i=t._topRadius,r=t._bottomRadius,a=t._slices,n=t._numberOfVerticalLines;if(!(e<=0||i<0||r<0||0===i&&0===r)){var o,u=2*a,s=L.CylinderGeometryLibrary.computePositions(e,i,r,a,!1),f=2*a;if(0<n){var d=Math.min(n,a);o=Math.round(a/d),f+=d}var l,b=V.IndexDatatype.createTypedArray(u,2*f),m=0;for(l=0;l<a-1;l++)b[m++]=l,b[m++]=l+1,b[m++]=l+a,b[m++]=l+1+a;if(b[m++]=a-1,b[m++]=0,b[m++]=a+a-1,b[m++]=a,0<n)for(l=0;l<a;l+=o)b[m++]=l,b[m++]=l+a;var c=new O.GeometryAttributes;c.position=new G.GeometryAttribute({componentDatatype:R.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:s}),g.x=.5*e,g.y=Math.max(r,i);var p=new A.BoundingSphere(v.Cartesian3.ZERO,v.Cartesian2.magnitude(g));if(h.defined(t._offsetAttribute)){e=s.length;var y=new Uint8Array(e/3),_=t._offsetAttribute===C.GeometryOffsetAttribute.NONE?0:1;C.arrayFill(y,_),c.applyOffset=new G.GeometryAttribute({componentDatatype:R.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:y})}return new G.Geometry({attributes:c,indices:b,primitiveType:G.PrimitiveType.LINES,boundingSphere:p,offsetAttribute:t._offsetAttribute})}},function(t,e){return h.defined(e)&&(t=f.unpack(t,e)),f.createGeometry(t)}});