import {screen, render} from "@testing-library/react";
import DJCard from "./components/pages/dj/djcard";
import {rest} from "msw";
import {setupServer} from "msw/node";
import React from "react";

const djNameResponse = rest.get("https://localhost:7284/api/djaccount", (req, res, ctx) => {
    return res(ctx.json([{id: 1, name: "Hardwell", description: "Zieke Techno DJ", email: "dj@hardwellmgmt.com", phone: 316759434, price: 4560}]));
});

const handlers = [djNameResponse];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test("It should have the correct Dj called Hardwell",async() => {
    render(<DJCard/>)
    const djName = await screen.findByText("Hardwell");
    expect(djName).toBeVisible();

})

test("It should have the correct Dj called Hardwell with the description Zieke Techno DJ",async() => {
    render(<DJCard/>)
    const djName = await screen.findByText("Zieke Techno DJ")
    expect(djName).toBeVisible();

})

test("It should have the correct Dj called Hardwell with the price 4560",async() => {
    render(<DJCard/>)
    const djName = await screen.findByText(4560)
    expect(djName).toBeVisible();

})
