import React from 'react'


//Calculate the distance between two points using only the X,Y coordinates 
export function CalculateDistanceXY(posePoint1, posePoint2) {
    var xVal = (posePoint1['x'] - posePoint2['x']);
    var yVal = (posePoint1['y'] - posePoint2['y']);

    return Math.sqrt(xVal ** 2 + yVal ** 2);
}


// Calculate the distance between two points using the X,Y,Z coordinates
export function CalculateDistanceXYZ(posePoint1, posePoint2) {
    var xVal = (posePoint1['x'] - posePoint2['x']);
    var yVal = (posePoint1['y'] - posePoint2['y']);
    var zVal = (posePoint1['z'] - posePoint2['z']);

    return Math.sqrt(xVal ** 2 + yVal ** 2 + zVal ** 2);
}

//Calculate the angle between three points using X, Y, Z
// point2 is the middle point of the two connected angles
export function CalculateAngleXYZ(posePoint1, posePoint2, posePoint3) {
    var vec1 = getVectorXYZ(posePoint2, posePoint1);
    var vec2 = getVectorXYZ(posePoint2, posePoint3);


    return Math.acos(dotProductXYZ(vec1, vec2) / (CalculateDistanceXYZ(posePoint1, posePoint2) * CalculateDistanceXYZ(posePoint2, posePoint3)))

}

//returns the vector represented from point 1 to point 2 -- X Y Z ONLY
function getVectorXYZ(posePoint1, posePoint2) {
    var xVal = (posePoint1['x'] - posePoint2['x']);
    var yVal = (posePoint1['y'] - posePoint2['y']);
    var zVal = (posePoint1['z'] - posePoint2['z']);
    return [xVal, yVal,zVal]
}

//Calculate the dot product of two vectors -- X Y Z ONLY
function dotProductXYZ(vector1, vector2) {
    return vector1[0] * vector2[0] +vector1[1] * vector2[1] + vector1[2] * vector2[2]
}

//returns the vector represented from point 1 to point 2 -- X Y ONLY
function getVectorXY(posePoint1, posePoint2) {
    var xVal = (posePoint1['x'] - posePoint2['x']);
    var yVal = (posePoint1['y'] - posePoint2['y']);
    
    return [xVal, yVal]
}

//Calculate the dot product between two vectors -- X Y ONLY
function dotProductXY(vector1, vector2) {
    return vector1[0] * vector2[0] +vector1[1] * vector2[1]
}
