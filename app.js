const mobile = [
    {
      companyName: "Samsung",
      cover: ["Samsung"],
      models: [
        {
          name: "vA04s",
          item: ["Samsung Galaxy A04s"],
        },
        {
          name: "vA04",
          item: ["Samsung Galaxy A04"],
        },
        {
          name: "vM135G",
          item: ["Samsung Galaxy M13 5G"],
        },
        {
          name: "vA13",
          item: ["Samsung Galaxy A13"],
        },
        {
          name: "vX6Pro",
          item: [
            "Samsung Galaxy Xcover6 Pro",
          ],
        },
        {
          name: "vS20FE",
          item: [
            "Samsung Galaxy S20 FE 2022",
          ],
        },
      ],
    },
    {
      companyName: "apple",
      cover: ["Apple"],
      models: [
        {
          name: "vXSMax",
          item: ["Apple iPhone XS Max"],
        },
        {
          name: "v13ProMax",
          item: ["Apple iPhone 13 Pro Max"],
        },
        {
          name: "v12ProMax",
          item: ["Apple iPhone 12 Pro Max"],
        },
        {
          name: "v12",
          item: ["Apple iPhone 12"],
        },
        {
          name: "vSE",
          item: ["Apple iPhone SE (2020)"],
        },
        {
          name: "vXR",
          item: ["Apple iPhone XR"],
        },
      ],
    },
  ];

  let company = document.getElementById("companyname");
  let companymodel = document.getElementById("companymodel");

mobile.forEach((value) =>{
    let option = document.createElement("option");
    option.innerHTML = value.companyName;
    company.appendChild(option);
});

company.addEventListener("change", () =>{
    companymodel.innerHTML = "";
    mobile.forEach((value) =>{
        if(value.companyName === company.value){
            companymodel.disabled = false;
            value.models.forEach((value) =>{
                let option = document.createElement("option");
                option.innerHTML = value.name;
                companymodel.appendChild(option);
            })
        }
    })
})

function data (){
    mobile.filter((val) =>{
        if(val.companyName === company.value){
            val.models.filter((val1)=>{
                if(val1.name === companymodel.value){
                    console.log(val1.item);
                }
            })
        }
    })
}