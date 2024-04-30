<cfset dsn = "SoligaDSN">


<cfset dsn_="SoligaDatabase">
  <cfquery name="tum_talepler" datasource="#dsn_#">
  SELECT * FROM Gelen_Talepler
</cfquery>

<cfdump var="#tum_talepler#" abort>
<!--- <!--- Veritabanına bağlan --->
<cfquery datasource="#dsn#" username="#username#" password="#password#">
    <cfprocessingdirective pageencoding="utf-8">
    <cfparam name="form.isim" default="">
    <cfparam name="form.soyisim" default="">
    <cfparam name="form.email" default="">
    <cfparam name="form.telefon" default="">
    <cfparam name="form.kategori" default="">
    <cfparam name="form.yardım" default="">

    <cfquery name="Gelen_Talepler">
        INSERT INTO Gelen_Talepler (Isim, Soyisim, Email, Telefon, Kategori, Yardım)
        VALUES (
            <cfqueryparam value="#form.isim#" cfsqltype="cf_sql_varchar">,
            <cfqueryparam value="#form.soyisim#" cfsqltype="cf_sql_varchar">,
            <cfqueryparam value="#form.email#" cfsqltype="cf_sql_varchar">,
            <cfqueryparam value="#form.telefon#" cfsqltype="cf_sql_varchar">,
            <cfqueryparam value="#form.kategori#" cfsqltype="cf_sql_varchar">,
            <cfqueryparam value="#form.yardım#" cfsqltype="cf_sql_varchar">
        )
    </cfquery>
</cfquery>

<cfif Gelen_Talepler.recordcount>
    <p>Kayıt başarıyla eklendi.</p>
<cfelse>
    <p>Kayıt eklenirken bir hata oluştu.</p>
</cfif>

<cflocation url="index.html">
 --->