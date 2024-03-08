import "./footer.scss";

function Footer() {
  return (
    <>
      <div id="footer">
        <div id="save_button" className="sl_button">
          {" "}
          Save{" "}
        </div>
        <div id="save_to_file_button" className="sl_button">
          {" "}
          Export{" "}
        </div>
        <div id="changelog_button" className="game_info">
          <a href="changelog.txt" target="_blank">
            v0.3.4i-2
          </a>
        </div>
        <div id="help_button" className="game_info">
          <a href="help.html" target="_blank">
            <i className="material-icons">help_outline</i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
