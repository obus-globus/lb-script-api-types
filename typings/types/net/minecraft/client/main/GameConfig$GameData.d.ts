import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PreferredGraphicsApi } from '../../../../net/minecraft/client/PreferredGraphicsApi.d.ts'
export class GameConfig$GameData extends Object {
    constructor(demo: boolean, launchVersion: string, versionType: string, disableMultiplayer: boolean, disableChat: boolean, captureTracyImages: boolean, vulkanValidation: boolean, renderDebugLabels: boolean, forcedGraphicsApi: PreferredGraphicsApi, offlineDeveloperMode: boolean)
    captureTracyImages: boolean;
    demo: boolean;
    disableChat: boolean;
    disableMultiplayer: boolean;
    forcedGraphicsApi: PreferredGraphicsApi;
    launchVersion: string;
    offlineDeveloperMode: boolean;
    renderDebugLabels: boolean;
    versionType: string;
    vulkanValidation: boolean;
}