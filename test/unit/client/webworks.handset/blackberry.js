/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */
describe("blackberry", function () {
    var blackberry = ripple('platform/webworks.handset/2.0.0/client/blackberry'),
        transport = ripple('platform/webworks.core/2.0.0/client/transport'),
        spec = ripple('platform/webworks.handset/2.0.0/spec');

    describe("in spec/index", function () {
        it("includes blackberry module according to proper object structure", function () {
            expect(spec.objects.blackberry.path)
                .toEqual("webworks.handset/2.0.0/client/blackberry");
        });
    });

    describe("using client/identity", function () {
        describe("network", function () {
            it("calls the transport", function () {
                spyOn(transport, "call").andReturn("the network");
                expect(blackberry.network).toEqual("the network");
                expect(transport.call).toHaveBeenCalledWith("blackberry/system/network");
            });
        });
    });
});
