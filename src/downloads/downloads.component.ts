import { Component, OnInit } from '@angular/core';
import * as request from 'request-promise-native';

@Component({
  selector: 'my-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css']
})
export class DownloadsComponent implements OnInit {

  content:any = new Array();

  constructor() { }

  ngOnInit() {
    //this.getData();
  }

  async getData(){
    var url = "https://www.googleapis.com/fusiontables/v2/query?sql=SELECT%20*%20FROM%201lgxjPxZ8_V6OyA0Wa19iGpuZKKn1mBf1chJOgkqU%20WHERE%20plant%3D%27" + localStorage.getItem("plantName") + "%27%20AND%20rawWaterTurbidity%20>%200%20ORDER%20BY%20timeFinished%20DESC&key=AIzaSyB4fY4TPsWMhqifu68GFq1aWREjiiAYZmo";
    // var url2 = "https://www.googleapis.com/fusiontables/v2/query?sql=SELECT%20*%20FROM%201lgxjPxZ8_V6OyA0Wa19iGpuZKKn1mBf1chJOgkqU%20WHERE%20plant%3D%27" + localStorage.getItem("plantName") + "%27%20AND%20rawWaterTurbidity%20>%200%20ORDER%20BY%20timeFinished%20DESC&key=AIzaSyB4fY4TPsWMhqifu68GFq1aWREjiiAYZmo";
    const result = await request.get(url);
    var data = JSON.parse(result);
    var columns = data.columns;
    var data_rows = data.rows;
    var timeIndex= columns.indexOf("timeFinished");
    var rwtIndex = columns.indexOf("rawWaterTurbidity");
    var swtIndex = columns.indexOf("settledWaterTurbidity");
    var fwtIndex = columns.indexOf("filteredWaterTurbidity1");
    var cdIndex = columns.indexOf("coagulantDose");
    for (var i=0; i<data_rows.length; i++){
      var row = data_rows[i];
      var csv_row = new Array([row[timeIndex], row[rwtIndex], row[swtIndex],row[fwtIndex], row[cdIndex]])
      this.content.push(csv_row)
    }
    let csvContent = "data:text/csv;charset=utf-8";
    csvContent += "filler, Time Finished,Raw Water Turbidity (NTU),Settled Water Turbidity (NTU), Filtered Water Turbidity (NTU), Coagulant Dose (mg/L)\n";
    for (var j=0; j<this.content.length; j++){
      var entry = this.content[j].join(",");
      csvContent += entry + "\n"
    }

    var encoded = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encoded);
    link.setAttribute("download", localStorage.getItem("plantName") + "_Data.csv");
    document.body.appendChild(link);
    link.click();
  }

  // downloadData(){
  //   let csvContent = "data:text/csv;charset=utf-8";
  //   csvContent += "filler, Time Finished,Raw Water Turbidity (NTU),Settled Water Turbidity (NTU), Filtered Water Turbidity (NTU), Coagulant Dose (mg/L)\n";
  //   for (var j=0; j<this.content.length; j++){
  //     var entry = this.content[j].join(",");
  //     csvContent += entry + "\n"
  //   }
  //
  //   var encoded = encodeURI(csvContent);
  //   var link = document.createElement("a");
  //   link.setAttribute("href", encoded);
  //   link.setAttribute("download", localStorage.getItem("plantName") + "_Data.csv");
  //   document.body.appendChild(link);
  //   link.click();
  // }

}
