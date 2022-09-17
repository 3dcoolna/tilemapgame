// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100018000303030303030303030101010101010101010101030103010303030303030b01010303030301030101010101010101010103010101010303030303030303030101030107010103010101010101010301010301030303030103030303030303010103010101010101030101010101010101030101010303030301030303030301010308030103010101010301030103010101010c0103030303030301030103010109010101010101010101010301030101030303030303030303030505010301010101010101010101010101010103010103030303030303030303030303030101030101010101010101010101010301010306030303030b03010303030103010103010101010101030103010301030101030103030303030301030103030301010301030204010101010b0101010101010301030303010303030303030303010103010301030a030303010101010301010301010101010101010103030103010103030303030303030303030303030101010101010101010101010101010101`, img`
.........2222222
2222.2.2.......2
2....2.222222222
2.2222.........2
2.2.22.2222222.2
2.2....2.......2
2.222222.2222222
2.222....2.....2
2.2.2.2222.2.2.2
222.2......2.2.2
2.2222222222.2.2
2............2.2
22222222222222.2
2..............2
2.222222222222.2
2.2......2...2.2
2.222222.2.2.2.2
2.2......2.2...2
2.2...2222.22222
2.2...2........2
2.2.2.2...2222.2
2.222222222..2.2
2..............2
2222222222222222
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.chestClosed,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundSouthEast1,myTiles.tile3,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile4":
            case "tile6":return tile6;
            case "Key":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile8":
            case "tile10":return tile10;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
