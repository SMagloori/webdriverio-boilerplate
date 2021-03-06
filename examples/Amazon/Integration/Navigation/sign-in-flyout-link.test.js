import Navigation from "../../component_objects/Navigation"

describe("Navigation : SignIn Tooltip", () => {
  it("reaches the homepage", () => {
    Navigation.open()
    Navigation.signInFlyout.waitForDisplayed(undefined, true)
    Navigation.reviveFlyout(Navigation.signInFlyout)
  })

  it("Sign-in Link works correctly", () => {
    Navigation.signInTooltipLink.click()
    expect(browser.getUrl()).to.be.equal("https://www.amazon.com/ap/register?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26ref_%3Dnav_custrec_newcust")
  })
})
