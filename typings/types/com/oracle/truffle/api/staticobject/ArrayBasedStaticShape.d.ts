import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { ArrayBasedStaticShape$ArrayBasedPropertyLayout } from '../../../../../com/oracle/truffle/api/staticobject/ArrayBasedStaticShape$ArrayBasedPropertyLayout.d.ts'
import type { StaticShape } from '../../../../../com/oracle/truffle/api/staticobject/StaticShape.d.ts'
import type { StaticShape$Builder } from '../../../../../com/oracle/truffle/api/staticobject/StaticShape$Builder.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ArrayBasedStaticShape<T extends unknown> extends StaticShape<T> {
    static newBuilder(paramlanguage: TruffleLanguage<Object>): StaticShape$Builder;
    private constructor(parentShape: ArrayBasedStaticShape<T>, storageClass: Class<Object>, propertyLayout: ArrayBasedStaticShape$ArrayBasedPropertyLayout, safetyChecks: boolean)
    // private propertyLayout: ArrayBasedStaticShape$ArrayBasedPropertyLayout;
    // private superShapes: StaticShape<T>[];
    // private checkShape(receiverObject: Object): boolean;
    // private getPropertyLayout(): ArrayBasedStaticShape$ArrayBasedPropertyLayout;
    getStorage(obj: Object, primitive: boolean): Object;
}