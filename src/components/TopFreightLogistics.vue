<template>
  <div >
    <button @click="moveFreight"> Move freight (#1 & 2) </button>
    <button @click="fitBounds"> Swithch Vehicles (# 3)</button>
    <button @click="reset"> Reset</button>
    
   <GmapMap
    ref="mapRef"     
    :center="center"
    :zoom="16.8"
    map-type-id="terrain"
    style="width: 100%; height: 800px"
    >
      <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m"     
    />  
    <GmapMarker 
      v-if="changeFreight"
       ref="freight"            
      :position="freightPosition"
      :icon="'https://images.sendyit.com/web_platform/vendor_type/top/25_freight.png'"
    /> 
    <GmapMarker 
      v-if="!changeFreight && showChangeFreight"
       ref="freight"            
      :position="freightPosition"
      :icon="'https://images.sendyit.com/web_platform/vendor_type/top/25_freight.png'"
    /> 
    <GmapPolyline 
    v-if="path.length > 0"
    :path="path"       
    ref="polyline">
    </GmapPolyline>
    <gmap-info-window
      v-if="changeFreight"
      :opened="infoWondowOpen"
      :position="freightPosition"
      :options = "{
        pixelOffset: {
          width: 0,
          height: -25
        }
      }"
    >
      <h4>
        Vehicle Information(KAY 747E) ,
        Vehicle Size (27 Tonnes)  
      </h4>
      <div>
        Cargo Type (Flatbed) ,
        Goods Type (Rice)
      </div>  
      <div>
        {{"Current Location: " + "Latitude: " + freightPosition.lat + ", Longitude: " + freightPosition.lng }}
      </div>
      <div>
        {{"Last location: " + "Latitude: " + perviousFreightPosition.lat + ", Longitude: " + perviousFreightPosition.lng }}
      </div>
    </gmap-info-window>
    <gmap-info-window
      v-if="!changeFreight && showChangeFreight"
      :opened="infoWondowOpen"
      :position="freightPosition"
      :options = "{
        pixelOffset: {
          width: 0,
          height: -25
        }
      }"
    >
      <h4>
       {{driverInfo}}
      </h4>      
    </gmap-info-window>
  </GmapMap>
  </div>
</template>

<script>
//-1.298982, 36.776811
//-1.291844, 36.779049

/*
{ lat:-1.298982, lng: 36.776811},
{ lat:-1.297459, lng: 36.776747},
{ lat:-1.296193, lng: 36.776726},
{ lat:-1.296097, lng: 36.779236},
{ lat:-1.296151, lng: 36.777637},
{ lat:-1.296215, lng: 36.776693},
{ lat:-1.294252, lng: 36.776586},
{ lat:-1.294048, lng: 36.776790},
{ lat:-1.293973, lng: 36.779118},
{ lat:-1.292622, lng: 36.779075},
{ lat:-1.291844, lng: 36.779049}*/
export default {
  name: 'Top-Freight-logistics',
  
  data () {
    return {
      markers: [
        {
        lat: -1.298982 ,
        lng: 36.776811        
        },
        {
        lat:-1.291844 ,
        lng: 36.779049       
        }        
      ],
      path: [
        { lat:-1.298982, lng: 36.776811},
        { lat:-1.297459, lng: 36.776747},
        { lat:-1.296193, lng: 36.776726},
        { lat:-1.296097, lng: 36.779236},
        { lat:-1.296151, lng: 36.777637},
        { lat:-1.296215, lng: 36.776693},
        { lat:-1.294252, lng: 36.776586},
        { lat:-1.294048, lng: 36.776790},
        { lat:-1.293973, lng: 36.779118},
        { lat:-1.292622, lng: 36.779075},
        { lat:-1.291844, lng: 36.779049}
      ],
      center: { lat:-1.296215, lng: 36.776693},
      freightPosition: { lat:-1.298982, lng: 36.776811},
      perviousFreightPosition: { lat:-1.298982, lng: 36.776811},
      infoWondowOpen: true,
      changeFreight: true,
      showChangeFreight: true,
      driverInfo: "Driver A"
    }    
  },
  methods: {
    fitBounds() {
    let count = 0
   this.path =[];
   this.changeFreight = false;
   this.markers = [];
   this.freightPosition = { lat:-1.300355, lng: 36.773850}
   this.center = { lat:-1.29631028162482, lng: 36.77500534205996}

    let interval1 = window.setInterval(() => {  
      if(count === 5){
        this.showChangeFreight = false
        this.changeDriver();
        clearInterval(interval1)
        }    
      count++; 
    }, 1000);  
   
  },
  changeDriver(){
    let count = 0
    let interval2 = window.setInterval(() => {  
          if(count === 5){
            this.driverInfo = "Driver B";
            this.freightPosition = { lat:-1.291879, lng: 36.778389};
            this.showChangeFreight = true
            clearInterval(interval2)
            }    
          count++; 
        }, 1000);
  },
  moveFreight(){
    let count = 0
    let interval = window.setInterval(() => {   

      this.freightPosition = this.path[count];
      if(count){       
        this.perviousFreightPosition = this.path[count-1];
       }
      if(count === 10){
        this.perviousFreightPosition =  this.freightPosition;
        clearInterval(interval)
        }    
      count++; 
    }, 1000);
    
  }   ,
   reset(){}
}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style> 
