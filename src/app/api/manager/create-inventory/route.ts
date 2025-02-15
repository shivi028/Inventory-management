import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import dbConnect from "@/lib/DbConnect";
import { Inventory } from "@/models/Invenroty";

export async function POST(req:NextRequest) {

    const { name , location  } = await  req.json()
     await dbConnect()
     const inventory  = await  Inventory.create({
        name ,
        location 
     })  
     console.log(inventory);
     

     return NextResponse.json({
        message: "Inventory created successfully",
        success : true,
        data : inventory
     },{
        status : 200
     })

}

