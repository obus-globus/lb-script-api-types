import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ShowStoreOfferRedirectType extends Enum<ShowStoreOfferRedirectType> {
    static DressingRoomOffer: ShowStoreOfferRedirectType;
    static MarketplaceOffer: ShowStoreOfferRedirectType;
    static ThirdPartyServerPage: ShowStoreOfferRedirectType;
    static getByName(paramarg0: string): ShowStoreOfferRedirectType;
    static getByName(paramarg0: string, paramarg1: ShowStoreOfferRedirectType): ShowStoreOfferRedirectType;
    static getByValue(paramarg0: number): ShowStoreOfferRedirectType;
    static getByValue(paramarg0: number, paramarg1: ShowStoreOfferRedirectType): ShowStoreOfferRedirectType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ShowStoreOfferRedirectType;
    static values(): ShowStoreOfferRedirectType[];
    private constructor(arg2: number)
    private constructor(arg2: ShowStoreOfferRedirectType)
    readonly value: number;
    getValue(): number;
    name(): "MarketplaceOffer" | "DressingRoomOffer" | "ThirdPartyServerPage";
}