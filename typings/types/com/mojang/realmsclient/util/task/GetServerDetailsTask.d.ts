import type { RealmsJoinInformation } from '../../../../../com/mojang/realmsclient/dto/RealmsJoinInformation.d.ts'
import type { RealmsServer } from '../../../../../com/mojang/realmsclient/dto/RealmsServer.d.ts'
import type { RealmsLongRunningMcoTaskScreen } from '../../../../../com/mojang/realmsclient/gui/screens/RealmsLongRunningMcoTaskScreen.d.ts'
import type { LongRunningTask } from '../../../../../com/mojang/realmsclient/util/task/LongRunningTask.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PopupScreen } from '../../../../../net/minecraft/client/gui/components/PopupScreen.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class GetServerDetailsTask extends LongRunningTask {
    static setScreen(paramscreen: Screen): void;
    constructor(lastScreen: Screen, server: RealmsServer)
    // private lastScreen: Screen;
    // private server: RealmsServer;
    connectScreen(address: RealmsJoinInformation): RealmsLongRunningMcoTaskScreen;
    // private fetchServerAddress(): RealmsJoinInformation;
    getTitle(): Component;
    // private resourcePackDownloadConfirmationScreen(address: RealmsJoinInformation, packId: UUID, onCompletionScreen: (param0: RealmsJoinInformation) => Screen): PopupScreen;
    run(): void;
    // private scheduleResourcePackDownload(address: RealmsJoinInformation, packId: UUID): CompletableFuture<Object>;
}