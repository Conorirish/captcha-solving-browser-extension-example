import assert from "node:assert/strict";
import test from "node:test";
import {buildCreateTaskPayload, publicAuditRecord, validateSolveRequest} from "../src/contract.mjs";

const fixture = {authorizationRef: "QA-1", targetUrl: "http://qa.localhost/form", imageBase64: "RklYVFVSRQ=="};

test("accepts an explicitly allowlisted QA fixture", () => assert.equal(validateSolveRequest(fixture).authorizationRef, "QA-1"));
test("rejects a target outside the allowlist", () => assert.throws(() => validateSolveRequest({...fixture, targetUrl: "https://example.com"}), /allowlisted/));
test("requires an authorization reference", () => assert.throws(() => validateSolveRequest({...fixture, authorizationRef: ""}), /authorizationRef/));
test("builds the documented ImageToText task shape", () => assert.deepEqual(buildCreateTaskPayload("fixture-key-123456789", validateSolveRequest(fixture)), {clientKey: "fixture-key-123456789", task: {type: "ImageToTextTask", body: "RklYVFVSRQ=="}}));
test("audit output does not retain image data", () => assert.deepEqual(publicAuditRecord(validateSolveRequest(fixture), "fixture_ready"), {authorizationRef: "QA-1", targetOrigin: "http://qa.localhost", status: "fixture_ready", retainedImage: false}));
