import type { RealmsServer } from '../../../../../com/mojang/realmsclient/dto/RealmsServer.d.ts'
import type { RealmCreationTask } from '../../../../../com/mojang/realmsclient/util/task/RealmCreationTask.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
export class RealmsCreateWorldFlow extends Object {
    static createWorld(paramminecraft: Minecraft, paramreturnScreen: Screen, paramlastScreen: Screen, paramslot: number, paramrealmsServer: RealmsServer, paramrealmCreationTask: RealmCreationTask): void;
    constructor()
}