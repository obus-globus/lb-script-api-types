import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MinecraftAccountKt extends Object {
    /**
     * Client token of every session we create. Randomised per launch, which is what the protocol expects
     * from a client that does not persist one.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/features/account/MinecraftAccount.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/MinecraftAccount.kt:38}
     */
    static getClientIdentifier(): string;
}