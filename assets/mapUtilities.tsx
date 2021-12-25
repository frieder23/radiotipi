<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.5" tiledversion="1.7.2" name="mapUtilities" tilewidth="32" tileheight="32" tilecount="9" columns="9">
 <image source="../../maps/mapUtilities.png" trans="ff00ff" width="288" height="32"/>
 <tile id="0">
  <properties>
   <property name="exitURL" value="main.json"/>
  </properties>
 </tile>
 <tile id="4">
  <properties>
   <property name="silent" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="5">
  <properties>
   <property name="audioLoop" type="bool" value="true"/>
   <property name="audioVolume" type="float" value="1"/>
   <property name="playAudio" value="assets/beenoise.mp3"/>
  </properties>
 </tile>
</tileset>
