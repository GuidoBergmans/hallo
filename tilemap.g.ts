// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`2000200002020202020202020202020202020202020202020202020202020202020202020202020202020202020101040404040402020202020202020202020202020202020202020202020201010104040404040404010102020202020202020202020202020202020202020101010404040404040401010101010202020202020202020202020202020202010101010404040404040404010101010101010202020202020202020101020201010101010404040404040401010101010101010202020202020201010101010101010101010101010401010101010101010101020202020102020101010101010101010101010101010101010101010101010102020202010101010101010101010101010101010101010101010101010101010202020201010101010101010101010101010101010101010101010101010101020202020101010101010101010101010101010101010101010101010101010102020202010101010101010101010101010101010101010101010101010101010202020201010101010101010101010101010101010101010101010101010101020202020101010101010101010101010101010101010101010101010101010102020202010101010101010101010101010101010101010101010101010101010102020201010101010101010101010101010101010101010101010101010101010202020101010101010101010101010101010501010101010101010101010101020202010101010101010101010101010101010101010101010101010101010102020202020201010101010101010101010101010101010101010101010101010202020202020101010101010101010101010101010101010101010101010101020202020202010101010101010101010101010101010101010101010101010102020202020203030101010101010101010101010101010101010101010101010202020202020303030301010101010101010101010101010101010101010101010202020202030303030101010101010101010101010101010101010101010101010202020203030303030101010101010101010101010101010101010101010101020202020303030303010101010101010101010101010101010101010101010102020202030303030303030101010101010101010101010101010101010101010202020202020303030303010101010101010101010101010101010101010101020202020202020302020202020202020201010101010101010101010101010202020202020202020202020202020202020202010101010101010101010202020202020202020202020202020202020202020202020101010101010202020202020202020202020202020202020202020202020202020202020202020202020202`, img`
22222222222222222222222222222222
222222222.......2222222222222222
22222222............222222222222
22222222...............222222222
22222222...................22222
2222..22....................2222
222.........................2222
.22.........................2222
............................2222
............................2222
............................2222
............................2222
............................2222
............................2222
.............................222
.............................222
...............2.............222
.............................222
222..........................222
222..........................222
222..........................222
222..........................222
222...........................22
222............................2
222............................2
222............................2
222............................2
22222..........................2
222222.222222222..............22
222222222222222222..........2222
22222222222222222222......222222
22222222222222222222222222222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
