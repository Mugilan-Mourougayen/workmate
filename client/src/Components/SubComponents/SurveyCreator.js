import React, { useEffect, useState } from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';
import 'surveyjs-editor/surveyeditor.css';
import * as SurveyEditor from 'surveyjs-editor';

const SurveyCreator = () => {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const editorOptions = { showEmbededSurveyTab: false };
    const surveyEditor = new SurveyEditor.SurveyEditor('surveyEditorContainer', editorOptions);
    setEditor(surveyEditor);

    return () => {
      surveyEditor.destroy();
    };
  }, []);

  const handleSaveSurvey = () => {
    const surveyJson = editor.text;
    // You can save the surveyJson or perform any desired action with it
    console.log(surveyJson);
  };

  return (
    <div>
      <div id="surveyEditorContainer"></div>
      <button onClick={handleSaveSurvey}>Save Survey</button>
    </div>
  );
};

export default SurveyCreator;
