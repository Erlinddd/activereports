import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "@grapecity/activereports/styles/ar-js-ui.css";
import "@grapecity/activereports/styles/ar-js-viewer.css";
import { Viewer } from "@grapecity/activereports-react";
import "@grapecity/activereports/pdfexport";
import "@grapecity/activereports/htmlexport";
import "@grapecity/activereports/xlsxexport";
import "@grapecity/activereports-localization";
import { FontStore } from "@grapecity/activereports/core";

const report = {
  Type: "report",
  Body: {
    Name: "Body",
    Type: "section",
    ReportItems: [
      {
        Type: "textbox",
        Name: "textbox1",
        Style: { FontSize: "18pt" },
        Value: "The UI of the viewer component uses the Japanese language.",
        Height: "10in",
      },
    ],
  },
  Name: "Report",
};

const exportsSettings = {
  pdf: {
    title: "ActiveReportsJS Sample",
    author: "GrapeCity",
    subject: "Web Reporting",
    keywords: "reporting, sample",
    userPassword: "pwd",
    ownerPassword: "ownerPwd",
    printing: "none",
    copying: false,
    modifying: false,
    annotating: false,
    contentAccessibility: false,
    documentAssembly: false,
    pdfVersion: "1.7",
    autoPrint: true,
    filename: "ActiveReportsJS-Sample.pdf",
  },
  xlsx: {
    creator: "GrapeCity",
    size: "Letter",
    orientation: "Landscape",
    sheetName: "Report",
    password: "pwd",
    filename: "ActiveReportsJS-Sample.xlsx",
  },
  html: {
    title: "ActiveReportsJS Sample",
    filename: "ActiveReportsJS-Sample.html",
    autoPrint: true,
    multiPage: true,
    embedImages: "external",
    outputType: "html",
  },
};

function App() {
  const [allExports, setAllExports] = React.useState([
    { label: "PDF", value: "pdf", available: true },
    { label: "HTML", value: "html", available: true },
    { label: "XLSX", value: "xlsx", available: true },
  ]);
  function onCheckedChange(expValue) {
    setAllExports((val) =>
      val.map((exp) => {
        if (exp.value === expValue)
          return { ...exp, available: !exp.available };
        return { ...exp };
      })
    );
  }
  return (
    <Fragment>
      <div class="container-fluid">
        <div class="form-group mb-3 mt-3">
          <div>
            <label>Select available Exports: </label>
          </div>
          {allExports.map((exp) => (
            <div class="form-check form-check-inline" key={exp.value}>
              <input
                class="form-check-input"
                type="checkbox"
                checked={exp.available}
                onChange={() => onCheckedChange(exp.value)}
              />
              <label class="form-check-label">{exp.label}</label>
            </div>
          ))}
        </div>
      </div>

      <div id="viewer-host">
        <Viewer
          report={{
            Uri: "adas.rdlx-json",
          }}
          exportsSettings={exportsSettings}
          availableExports={allExports
            .filter((exp) => exp.available)
            .map((exp) => exp.value)}
          sidebarVisible={true}
        />
      </div>
    </Fragment>
  );
}

export default App