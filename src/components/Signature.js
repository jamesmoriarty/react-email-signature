import React from "react";

function Signature(props) {
  return (
    <table cellSpacing={0} cellPadding={0} border={0}>
      <tbody>
        <tr>
          <td
            style={{
              borderRight: "2px solid #231f20",
              padding: "0 10px 0 5px",
              verticalAlign: "middle",
            }}
            valign="middle"
          >
            <a href="https://innablr.com.au" target="_blank">
              <img
                width={72}
                height={86}
                src="https://www.innablr.com.au/signature-logos/innablr.gif"
                alt="Innablr"
                style={{
                  maxHeight: "86px",
                  width: "auto !important",
                  display: "block",
                  border: "none",
                }}
              />
            </a>
          </td>
          <td style={{ verticalAlign: "middle", paddingLeft: "10px" }}>
            <table cellSpacing={0} cellPadding={0} border={0}>
              <tbody>
                <tr>
                  <td
                    style={{
                      paddingBottom: "0px",
                      fontFamily: "Verdana",
                      fontSize: "9pt",
                      color: "#231f20",
                    }}
                  >
                    <font
                      style={{
                        fontWeight: "bold",
                        fontFamily: "Verdana",
                        fontSize: "9pt",
                        color: "#231f20",
                      }}
                    >
                      {props.name}
                    </font>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      paddingBottom: "5px",
                      fontFamily: "Verdana",
                      fontSize: "9pt",
                      color: "#231f20",
                    }}
                  >
                    <font
                      style={{
                        fontFamily: "Verdana",
                        fontSize: "9pt",
                        color: "#231f20",
                      }}
                    >
                      {props.title}
                    </font>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      paddingBottom: "0px",
                      fontFamily: "Verdana",
                      fontSize: "9pt",
                    }}
                  >
                    <font
                      style={{
                        color: "#333333",
                        fontSize: "9pt",
                        fontFamily: "Verdana",
                      }}
                    >
                      <b>m.</b>{" "}
                      <a
                        href={"tel:" + props.phone.replace(/ /g, "")}
                        style={{ color: "#6244bb", textDecoration: "none" }}
                        target="_blank"
                      >
                        {props.phone}
                      </a>
                    </font>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      paddingBottom: "0px",
                      fontFamily: "Verdana",
                      fontSize: "9pt",
                    }}
                  >
                    <font
                      style={{
                        color: "#333333",
                        fontSize: "9pt",
                        fontFamily: "Verdana",
                      }}
                    >
                      <b>e.</b>{" "}
                      <a
                        href={"mailto:" + props.email}
                        style={{ color: "#6244bb", textDecoration: "none" }}
                        target="_blank"
                      >
                        {props.email}
                      </a>
                    </font>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      paddingBottom: "5px",
                      fontFamily: "Verdana",
                      fontSize: "9pt",
                    }}
                  >
                    <font
                      style={{
                        color: "#333333",
                        fontSize: "9pt",
                        fontFamily: "Verdana",
                      }}
                    >
                      <b>w.</b>{" "}
                      <a
                        href="https://innablr.com.au"
                        style={{ color: "#6244bb", textDecoration: "none" }}
                        target="_blank"
                      >
                        innablr.com.au
                      </a>
                    </font>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      paddingBottom: "0px",
                      fontFamily: "Verdana",
                      fontSize: "9pt",
                    }}
                  >
                    <table cellSpacing={0} cellPadding={0} border={0}>
                      <tbody>
                        <tr>
                          <td style={{ padding: "0 2px 0 0" }}>
                            <a
                              href="https://www.linkedin.com/company/innablr"
                              style={{
                                color: "#6244bb",
                                textDecoration: "none",
                              }}
                              target="_blank"
                            >
                              <img
                                src="https://www.innablr.com.au/signature-logos/linkedin.png"
                                alt="LinkedIn"
                                width={12}
                                height={12}
                                style={{
                                  maxHeight: "12px",
                                  width: "auto !important",
                                  display: "block",
                                  border: "none",
                                }}
                              />
                            </a>
                          </td>
                          <td style={{ padding: "1px 2px 0 2px" }}>
                            <a
                              href="https://twitter.com/InnablrTech"
                              style={{
                                color: "#6244bb",
                                textDecoration: "none",
                              }}
                              target="_blank"
                            >
                              <img
                                src="https://www.innablr.com.au/signature-logos/twitter.png"
                                alt="Twitter"
                                width={13}
                                height={11}
                                style={{
                                  maxHeight: "11px",
                                  width: "auto !important",
                                  display: "block",
                                  border: "none",
                                }}
                              />
                            </a>
                          </td>
                          <td style={{ padding: "0 2px" }}>
                            <a
                              href="https://www.facebook.com/InnablrTech"
                              style={{
                                color: "#6244bb",
                                textDecoration: "none",
                              }}
                              target="_blank"
                            >
                              <img
                                src="https://www.innablr.com.au/signature-logos/facebook.png"
                                alt="Facebook"
                                width={6}
                                height={12}
                                style={{
                                  maxHeight: "12px",
                                  width: "auto !important",
                                  display: "block",
                                  border: "none",
                                }}
                              />
                            </a>
                          </td>
                          <td style={{ padding: "0 2px" }}>
                            <a
                              href="https://goo.gl/maps/GtZMJSCMsuu"
                              style={{
                                color: "#6244bb",
                                textDecoration: "none",
                              }}
                              target="_blank"
                            >
                              <img
                                src="https://www.innablr.com.au/signature-logos/pin.png"
                                alt="Map"
                                width={7}
                                height={12}
                                style={{
                                  maxHeight: "12px",
                                  width: "auto !important",
                                  display: "block",
                                  border: "none",
                                }}
                              />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Signature;
