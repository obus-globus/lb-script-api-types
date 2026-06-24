import type { InspectorServer } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/InspectorServer.d.ts'
import type { InspectorServer$HttpRequest } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/InspectorServer$HttpRequest.d.ts'
import type { InspectorServer$HttpResponse } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/InspectorServer$HttpResponse.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InspectorServer$JSONHandler extends Object implements Function<InspectorServer$HttpRequest, InspectorServer$HttpResponse> {
    static identity(): (param0: Object | null) => Object | null;
    private constructor(null_: InspectorServer)
    andThen<V extends unknown>(arg0: (param0: InspectorServer$HttpResponse) => V): (param0: InspectorServer$HttpRequest) => V;
    apply(request: InspectorServer$HttpRequest): InspectorServer$HttpResponse;
    compose<V extends unknown>(arg0: (param0: V) => InspectorServer$HttpRequest): (param0: V) => InspectorServer$HttpResponse;
}