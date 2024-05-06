// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yoochan
// Created on: Apr 2024
// This file contains the JS functions for index.html
function checkTheTriangle() {
  const lengthA = document.getElementById("get-lengthA").value
  const lengthB = document.getElementById("get-lengthB").value
  const lengthC = document.getElementById("get-lengthC").value
  const lengthPack = [lengthA, lengthB, lengthC]

  // using the cosine law
  const angleA = Math.acos((lengthB ** 2 + lengthC ** 2 - lengthA ** 2) / (2 * lengthB * lengthC)) * (180 / Math.PI)
  const angleB = Math.acos((lengthC ** 2 + lengthA ** 2 - lengthB ** 2) / (2 * lengthC * lengthA)) * (180 / Math.PI)
  const angleC = Math.acos((lengthA ** 2 + lengthB ** 2 - lengthC ** 2) / (2 * lengthA * lengthB)) * (180 / Math.PI)

  const sumOfAngles = Number((angleA).toFixed(2)) + Number((angleB).toFixed(2)) + Number((angleC).toFixed(2))
  
  if(angleA+angleB+angleC == 180) {
    if(lengthA == lengthC == lengthB) {
      document.getElementById("Answer").innerHTML = "This triangle is equilateral triangle triangle"
    }else if(lengthA == lengthB || lengthB == lengthC || lengthA == lengthC) {
      document.getElementById("Answer").innerHTML = "This triangle is isosceles triangle"
    }else {
      document.getElementById("Answer").innerHTML = "This triangle is scalene triangle"
    }
  }
} 