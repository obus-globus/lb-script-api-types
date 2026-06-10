import type { RealmsClient } from '../../../../com/mojang/realmsclient/client/RealmsClient.d.ts'
import type { RealmsServiceException } from '../../../../com/mojang/realmsclient/exception/RealmsServiceException.d.ts'
import type { RealmsUtil$RealmsIoConsumer } from '../../../../com/mojang/realmsclient/util/RealmsUtil$RealmsIoConsumer.d.ts'
import type { RealmsUtil$RealmsIoFunction } from '../../../../com/mojang/realmsclient/util/RealmsUtil$RealmsIoFunction.d.ts'
import type { Instant } from '../../../../java/time/Instant.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GuiGraphicsExtractor } from '../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Screen } from '../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export class RealmsUtil extends Object {
    static convertToAgePresentation(paramtimeDiff: number): Component;
    static convertToAgePresentationFromInstant(paramdate: Instant): Component;
    static extractPlayerFace(paramgraphics: GuiGraphicsExtractor, paramx: number, paramy: number, paramsize: number, paramplayerId: UUID): void;
    static openScreenAndLogOnFailure(paramerrorScreen: (param0: RealmsServiceException) => Screen, paramerrorMessage: string): (param0: RealmsServiceException) => void;
    static openScreenOnFailure(paramerrorScreen: (param0: RealmsServiceException) => Screen): (param0: RealmsServiceException) => void;
    static runAsync(paramfunction: (param0: RealmsClient) => void, paramonFailure: (param0: RealmsServiceException) => void): CompletableFuture<void>;
    static supplyAsync(paramfunction: (param0: RealmsClient) => Object | null, paramonFailure: (param0: RealmsServiceException) => void): CompletableFuture<Object>;
    constructor()
}