const URL_db = 'https://script.google.com/macros/s/AKfycbyHb6NzxzJG-CyROx94j3kB2v3N2LAlR2ff_H5MD1CrvOYI25pDE4phr0LiPh2JfA3lwg/exec'

//画像のデータ
let imageData;
fetch(URL_db)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      imageData = data.message;
      makeImages(imageData);
    })
    .catch((error) => {
      console.log('失敗');
    });

function makeImages(path){
  let indexArea = document.getElementById("indexArea");
  let imagesArea = document.getElementById("imagesArea");
  for(i=1; i<path.length; i++)
  {
    let index_element = document.createElement("a");
    index_element.textContent = path[i][0];
    index_element.href = "#" + path[i][0];
    indexArea.appendChild(index_element);
    indexArea.appendChild(document.createElement("br"));

    let img_element = document.createElement("img");
    img_element.alt = path[i][0];
    img_element.id = path[i][0];
    img_element.src = "https://drive.google.com/uc?export=view&id=" + path[i][1].split("/")[5];//画像のidを取得して、埋め込み画像用のURLに書き換え
    imagesArea.appendChild(img_element);
  }
}


let postparam = {
  "method" : "POST",
  "mode" : "no-cors",
  "Content-Type" : "application/x-www-form-urlencoded",
  "body" : JSON.stringify(imageData),
};


//送る
// fetch(URL_db, postparam)
//     .then((response) => {
//       console.log('成功');
//     })
//     .catch((error) => {
//       console.log('失敗');
//     });


