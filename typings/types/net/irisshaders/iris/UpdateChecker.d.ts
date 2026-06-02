import type { URI } from '../../../java/net/URI.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { UpdateChecker$BetaInfo } from '../../../net/irisshaders/iris/UpdateChecker$BetaInfo.d.ts'
import type { UpdateChecker$UpdateInfo } from '../../../net/irisshaders/iris/UpdateChecker$UpdateInfo.d.ts'
import type { IrisConfig } from '../../../net/irisshaders/iris/config/IrisConfig.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
export class UpdateChecker extends Object {
    constructor(arg0: string)
    readonly betaInfo: CompletableFuture<UpdateChecker$BetaInfo>;
    // private currentVersion: string;
    // private info: CompletableFuture<UpdateChecker$UpdateInfo>;
    // private shouldShowBetaUpdateMessage: boolean;
    // private shouldShowUpdateMessage: boolean;
    // private usedIrisInstaller: boolean;
    // private checkBetaUpdates(): void;
    checkForUpdates(arg0: IrisConfig): void;
    getBetaInfo(): Optional<UpdateChecker$BetaInfo>;
    getUpdateInfo(): UpdateChecker$UpdateInfo;
    getUpdateLink(): Optional<URI>;
    getUpdateMessage(): Optional<Component>;
}