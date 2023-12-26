let row = document.querySelector('.myRow')

// display's jobs
function displayJobs(data) {
    // console.log(data);

    row.innerHTML = ''

    data.forEach(jobData => {
        
        row.innerHTML += `
        <div class="offset-lg-1 col-lg-5 col-12 mt-4">

              <div class="bg-white p-2 py-3"
              style="border-radius: 15px;
              box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
              -webkit-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
              -moz-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);">
              
                    <div class="d-flex justify-content-between align-items-center w-100">
                      <h6 id="companyName" class="ms-2  mb-0">${jobData.companyName || "Not Mentioned"}</h6>
                      <img class="me-2 " src="./assests/short logo.png" width="50rem">
                    </div>
                    
                    
                    <h5 id="designation" class="ms-2 mt-2">${jobData.designation}</h5>
                    
                    <h5 id="experience" class="ms-2 mt-2" style="color: #5d49e1;">${jobData.experience || "Not Mentioned"}</h5>

                    <p id="des" class="ms-2 mt-2" style="color: #5d49e1;">${jobData.desc.slice(0 ,100) || "Not Mentioned"}</p>

                    <div class="d-flex justify-content-between align-items-center ms-1 pt-2 ">
                        <button id="btn" class="d-flex justify-content-center align-items-center" class="mt-2">Onsite</button>

                        <div class="d-flex justify-content-center align-items-center">
                          <h6 id="city " class="pe-2 text-uppercase mb-0">${jobData.city}</h6>
                          <h6 id="country " class="pe-2 text-uppercase mb-0">${jobData.country}</h6>
                        </div>

                        
                      </div>

                      <div class="w-100 d-flex justify-content-end align-items-center ">
                        <p class="mb-0 pt-2 pe-2" id="views">${jobData.views} views</p>
                      </div>
                      
                      

                      </div>
                      
                      
                      </div>`
                    });
}


let searchBtn = document.querySelector('.searchBtn')  
let inputValue = document.querySelector('.inputValue')
let search = () => inputValue.value
                

// getting API
async function apiFunction() {
    let res = await fetch(`https://maroon-shorts.cyclic.cloud/api/jobAds/all?limit=10&pageNo=1&keyWord=${search()}&category=`)
    .then((res) => res.json())
    .then((data) => {
        displayJobs(data.data)
        return data.data
    })
    .catch((err) => console.log(err));

    console.log(res);
    return res
}
apiFunction()
